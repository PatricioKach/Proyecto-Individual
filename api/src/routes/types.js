const express = require("express");
const axios = require("axios");
const { Pokemon, Tipo } = require("../db");
const e = require("express");

//Traer los tipos desde la pokeapi,
//guardarlos en la base de datos
//utilizarlos desde lla base de datos
const getTypes = async (req, res, next) => {
  try {
    const allPokeObj = await Tipo.findAll();
    if (!allPokeObj.length) {
      const typeApi = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`
      );
      const mapeado = typeApi.data.results.map((el) => el.url);
      const array = [];
      for (let i = 0; i < mapeado.length; i++) {
        const entra = await axios.get(mapeado[i]);
        entra.data.types.forEach((el) => array.push(el.type.name));
      }
      let filter = array.filter((item, index) => {
        return array.indexOf(item) === index;
      });
      const objFilter = filter.map((e) => {
        // retorna un objeto con la clave "name" y el valor es el iterado
        return { name: e };
      });
      let bulki = await Tipo.bulkCreate(objFilter);
      bulki = bulki.map((e) => {
        return { name: e.name };
      });
      console.log(bulki);
      return res.json(bulki);
    }
    res.json(allPokeObj);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getTypes };

// console.log(filter)
// return    res.json(filter))

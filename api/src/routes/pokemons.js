// const express = require("express");
const axios = require("axios");
const { Pokemon, Tipo } = require("../db");

// const router = express.Router();

const getAllPokemons = async (req, res, next) => {
  const name = req.query.name;
  let pokemones = [];
  try {
    let pokeDB = await Pokemon.findAll();

    const allApi = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`
    );
    const mapeado = await allApi.data.results.map((el) => el.url);
    for (let i = 0; i < mapeado.length; i++) {
      const element = await axios.get(mapeado[i]);
      pokemones.push({
        name: element.data.name,
        id: element.data.id,
        attack: element.data.stats.find((e) => e.stat.name === "attack")
          .base_stat,
        defense: element.data.stats.find((e) => e.stat.name === "defense")
          .base_stat,
        hp: element.data.stats.find((e) => e.stat.name === "hp").base_stat,
        speed: element.data.stats.find((e) => e.stat.name === "speed")
          .base_stat,
        weight: element.data.weight,
        height: element.data.height,
      });
    }
    const encontrado = pokemones.filter((el) => el.name.includes(name));
    console.log(name);
    if (name) {
      if (!encontrado.length) {
        throw new Error("No se encontró el pokemon solicitado");
      }
      console.log(pokeDB);
      res.json(encontrado);
    } else {
      const todos = pokemones.concat(pokeDB);
      console.log(todos);

      res.json(todos);
    }
    // console.log(pokeDB);
  } catch (error) {
    next(error);
  }
};

const getPokemonById = async (req, res, next) => {
  const id = req.params.id;
  let pokemones;
  try {
    console.log(id);
    if (id.length > 10) {
      const dbPoke = await Pokemon.findByPk(id);
      console.log(dbPoke);
      if (!dbPoke) {
        throw new Error("No se encuentra en la base de datos");
      } else {
        res.json(dbPoke);
      }
    } else {
      const allApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const pokemon = await allApi.data;
      pokemones = {
        name: pokemon.name,
        id: pokemon.id,
        attack: pokemon.stats.find((e) => e.stat.name === "attack").base_stat,
        defense: pokemon.stats.find((e) => e.stat.name === "defense").base_stat,
        hp: pokemon.stats.find((e) => e.stat.name === "hp").base_stat,
        speed: pokemon.stats.find((e) => e.stat.name === "speed").base_stat,
        weight: pokemon.weight,
        height: pokemon.height,
      };
      res.json(pokemones);
    }
  } catch (error) {
    next(error);
  }
};

const createPokemon = async (req, res, next) => {
  const { name, hp, attack, defense, speed, weight, height, types } = req.body;
  const nuevopoke = await Pokemon.create({
    name,
    hp,
    attack,
    defense,
    speed,
    weight,
    height,
  });
  const tip = await Tipo.findAll({
    where: { id: types },
  });
  await nuevopoke.addTipos(tip); // add + nombre de mi tabla (en plural), y como propiedad, la constante donde encuentro lo que quiero agregar
  res.json(nuevopoke);
};

module.exports = { getAllPokemons, getPokemonById, createPokemon };

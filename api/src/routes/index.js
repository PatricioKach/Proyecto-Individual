const express = require("express");
// Importar todos los routers;
const router = express.Router();

const { getAllPokemons, getPokemonById, createPokemon } = require("./pokemons");
const { getTypes } = require("./types");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// router.use("/types", typesRoutes);
// router.use("/pokemons", );

router.get("/pokemons", getAllPokemons);
//llamado a la api
//filtrar api
// llamado asincrono a base de datos,
//combinar resultados,
//enviarlos ( validar que exista)

router.get("/pokemons/:id", getPokemonById);
// // recibir id por parametro (puedod estructurar)
// // verificar tipo de id
// //llamado asincrono para buscarlo (en base de datos o en api)

// router.get("/pokemons/:name", getPokemonByName);

router.post("/pokemons", createPokemon);
// //recibir datos y separarlos
// //validar datos
// // agregar el objeto a mi base de datos

// router.get("types", typesRoutes);

router.get("/types", getTypes);

module.exports = router;

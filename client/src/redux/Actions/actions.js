// import axios from "axios";
// export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";

// export default function getAllPokemons() {
//   return async (dispatch) => {
//     let pedido = axios.get("http://localhost:3001/pokemons");
//     dispatch({ type: GET_ALL_POKEMONS, payload: pedido.data });
//   };
// }

// // export default function getPokemonById(id){
// //   return async (dispatch) =>{
// //     let pedido = axios.get(`http://localhost:3001/pokemons/:${id}`);
// //     dispatch({type: GET_POKEMON_BY_ID, payload: pedido.data})
// //   }
// // }

// // export default function createPokemon(){
// //   return async (dispatch) =>{
// //     let pedido = axios.post(`http://localhost:3001/pokemons`);
// //     dispatch({type: CREATE_POKEMON, payload: pedido.data})
// //   }
// // }

// module.exports = { GET_ALL_POKEMONS };

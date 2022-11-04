import { GET_ALL_POKEMONS } from "../Actions/actions";

let initialState = {
  pokemons: [],
  types: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    // case GET_POKEMON_BY_ID:
    //   return {
    //     state,
    //     pokemons: action.payload,
    //   };

    default:
      return state;
  }
}

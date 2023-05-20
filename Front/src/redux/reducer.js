import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER } from "./action_type";

const initialState = {
    myFavorites: [],
    allCharacters: []
};


export default function rootReducer(state = initialState, {type,payload}){
    switch(type){
         case ADD_FAVORITES:
            return {
                ...state,
                myFavorites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload]
            }

            case DELETE_FAVORITES:
            const filtered = state.myFavorites.filter((char) => {
                return char.id !== payload 
            })

            return {
                ...state,
                myFavorites: filtered,
                allCharacters:filtered
            }
            case FILTER:
                const  allCharactersCopy  = [...state.allCharacters];
                const allCharsFiltered = allCharactersCopy.filter(char => char.gender === payload)
                return{
                    ...state,
                    myFavorites: allCharsFiltered
                }
    
            case ORDER:
                return{
                    ...state,
                    myFavorites: 
                        payload === "Ascendente" 
                        ? state.allCharacters.sort((a, b) => a.id > b.id ? 1 : - 1) 
                        : payload === "Descendente" 
                        ? state.allCharacters.sort((a, b) => a.id > b.id ? -1 : 1) 
                        : state.allFavs
                }
    
            
            default:
                return state
    }
}


import { ADD_FAVORITES,DELETE_FAVORITES,FILTER, ORDER } from "./action_type";



export function addFavorites(char) {
return {
    type:ADD_FAVORITES,
    payload: char,
   };
}
   export function deleteFavorites(id) {
    return {
        type:DELETE_FAVORITES,
        payload: id,
       };
   }

   export const filterCards = (status) => {
    return { type: FILTER, payload: status }
}

export const orderCards = (id) => {
    return { type: ORDER, payload: id}
}
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";

export default function Favorites(props) {
    let [order, setOrder] = useState("")
    let [gender, setGender] = useState("")
    const myFavorites = useSelector((s)=>s.myFavorites)
    let dispatch = useDispatch()
    const handleChangeOrder = e =>{
            e.preventDefault()
            if(e.target.name === "Ordenar"){
                return dispatch(orderCards(e.target.value))
            }
    }
    const handleChangeGender = e =>{
        e.preventDefault()
        if(e.target.name === "FiltrarGenero"){
            return dispatch(filterCards(e.target.value))
        }
}
    
    //const characters = props.characters.filter((e)=> {
        //return myFavorites.includes(e.id)
    //}//)
    return(
        <> 
            <div>
                <select name="Ordenar" onChange={handleChangeOrder} value={order}>
                <option value="default" disabled>Selecionar Orden</option>
                        <option value="Ascendente">Ascendente</option>
                        <option value="Descendente">Descendente</option>
                </select>

                <select name="FiltrarGenero" onChange={handleChangeGender} value={gender}>
                    <option value="default" disabled>Seleccionar Género</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>

            <div>
               {myFavorites?.map(({id, name, species, gender, image, onClose}) => {
                    return <Card
                     key={id}
                     name={name}
                     species={species}
                     gender={gender}
                     image={image}
                     id={id}
                     onClose={() => onClose(id)} 
                    />
                  })
               }
            </div>
         </>
    )
}
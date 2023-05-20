const axios = require('axios')
const { Character } = require('../models/Character')

const getApiData = async(res) =>{
    try{
        let arrCharacters = ""

        for(let i = 1; i <= 5; i++){
            const response = await axios(`https://rickandmortyapi.com/api/character?page=${i}`)

            const data = response.data.results

            let map = data.map(char=>{
                let {id, name, status, species, gender, origin, image} = char
                return {id, name, status, species, gender, origin, image}
            })

            arrCharacters = map
        }
        return arrCharacters;
    }
      // res.status(200).json(arrCharacters)
    
    catch(error){
        res.status(500).send(err)
        
    }
}
const saveApiData = async () => {
    try {
        const allCharacters = await getApiData(); 
        const createCharacter = await Character.bulkCreate()
        //bulkCreate nos permite pasarle un array de objetos y los crea todos juntos en la DB
    } catch (error){
        return{error: error.message}
    }
}

module.exports = {
    saveApiData
}

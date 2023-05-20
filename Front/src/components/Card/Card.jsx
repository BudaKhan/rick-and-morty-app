import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorites,deleteFavorites } from '../../redux/actions';

	function Card( props) {
      const [isFav,setIsFav] = useState(false)
      const dispatch = useDispatch();
      const myFavorites = useSelector((s) => s.myFavorites);

      function handleFavorite(char){
         if(isFav){
            setIsFav(false)
            dispatch(deleteFavorites(char.id));
         } else {
            setIsFav(true)
            dispatch(addFavorites(char)); //quiren ver algun otro ar
         } 
      }

      let some = myFavorites.some(el=>el.id===props.id)

   useEffect(()=>{ 
      some ? setIsFav(true) : setIsFav(false)
   }, [some])

      //useEffect(() => {
        // myFavorites.forEach((char) => {
        //    if (char.id === props.id) { 
             //  setIsFav(true);
        //    }
       //  });
    //  }, [myFavorites]); 

      return (
         <div>

   {isFav ? (
      <button onClick={()=>handleFavorite(props)}>❤️</button> 
   ) : (
      <button onClick={()=>handleFavorite(props)}>🤍</button>
   )};


         <button onClick={props.onClose}>X</button>
         <Link to={`/detail/${props.id}`}>
            <h2>{props.name}</h2>
         </Link>
            <h2>Specie: {props.species}</h2>
            <h2>Gender: {props.gender}</h2>
            <img src={props.image} alt={props.name} />
         </div>
      );
   }
   
   export default Card;
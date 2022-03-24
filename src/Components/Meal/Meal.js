import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Meal = (props) => {
const {strMealThumb, strMeal, strInstructions} = props.meal;
    return (
        <div className='col'>
          
    <div className="card h-100">
      <img src={strMealThumb}   className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Name: {strMeal}</h5>
        <p className="card-text">{strInstructions.slice(0, 200)}</p>
        
        <button onClick={() => props.addToCartHandle(props.meal)}  href="/" className="btn btn-danger"> 
        
        Add to Cart<span className='ms-2'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span>
         
         </button>
      </div>
</div>
        </div>
    );
};

export default Meal;
import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Meals = () => {

    const [cart,setCart] = useState([])
   
    const addToCartHandle = (meals) => {
      const newCart = [...cart,meals];
        setCart(newCart);
    }

    const [meals, setMeals] = useState([]);
   
    useEffect(()=> {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[])
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-9 mt-5'>
                        <div className='row row-cols-1 row-cols-md-2 gy-5'>
                        {
                            meals.map(meal => <Meal
                                addToCartHandle={addToCartHandle} key={meal.idMeal}
                            meal={meal}></Meal> )
                        }
                        </div>
                </div>
                <div className='col-lg-3 col-12 bg-warning border-2 border border-danger'>
                    <h3>Order Summary :</h3>
                    <h6>Selected Item : {cart.length}</h6>
                </div>
           </div>
        </div>
    );
};

export default Meals;
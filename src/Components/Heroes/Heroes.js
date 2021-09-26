import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Hero from '../Hero/Hero';
import './Heroes.css'

const Heroes = () => {
    const[ heroes,setHeroes] = useState([])
    //using state for set cart
    const[cart,setCart] = useState([])
    // using eventhandler for data loading
    const handleAddHeroes=(hero)=>{
        const newCart =[...cart, hero]
        // console.log(newCart)
        setCart(newCart)

    }

    useEffect( ()=>{
        fetch('./data.json')
        .then(res=>res.json())
        .then(data=> setHeroes(data))
      
    },[])
    return (
      <div className="row mt-2">
        <div className="col-md-9">
          {/* Heroes loaded */}
          <div className="row mt-4">
              {
                  heroes.map(hero=> <Hero
                    key={hero.key} 
                    hero={hero}
                    handleAddHeroes={handleAddHeroes}
                    ></Hero>)
              }
            
            
          </div>
        </div>
        <div className="col-md-3 ">
          {/* cart calculation */}
          <Cart cart={cart}></Cart>
        </div>
      </div>
    );
};

export default Heroes;
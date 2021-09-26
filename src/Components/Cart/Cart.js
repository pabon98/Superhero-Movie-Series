import React from 'react';
import './Cart.css'

const Cart = (props) =>{
  const{cart} = props ||{}

  //using reduce for total calculation
  const totalReducer =(preValue,currentValue)=> preValue + currentValue.salary
  const total = cart.reduce(totalReducer,0)
    return (
      <div className=" py-2 px-5">
        <h3>
          <i className="fas fa-users"></i> Heroes Added:{cart.length}
        </h3>
        <h4>Total Salary:{total} </h4>
        <br />
        {/* bootstrap card */}
        <ul>
          {cart.map((actors) => (
            <div className="card mb-3  cart-img" style={{ width: "12rem" }}>
           
              <img src={actors.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <span className="text-dark">{actors.name}</span>
                </h5>
                <p className="card-text">
                  <span className="text-danger">{actors.role}</span>
                </p>
                <a href="/Go" className="btn btn-dark px-4">
                  Visit
                </a>
              </div>
            </div>
          ))}
        </ul>
      </div>
    );
};

export default Cart;

/* 
 <ul>
          {cart.map((actors) => (
            <li>{actors.name}</li>
          ))}
        </ul>
*/
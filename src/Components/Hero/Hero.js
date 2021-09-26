import React from 'react';
import './Hero.css'

const Hero = (props) => {
  // console.log(props.hero)
  const{name,image,role,age,country,salary} = props.hero ||{}
   

    return (
      <div className="row col-md-4 me-2">
        <div
          className="card mb-3 ms-5 me-2 hero-img"
          style={{ maxWidth: "540px" }}
        >
          <div className="row g-0">
            <div className="col-md-5">
              <img src={image} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title">
                  <small>Name: {name}</small>
                </h5>
                <p className="card-text">
                  <small>Role: {role}</small>
                </p>
                <p className="card-text">
                  <small>Age: {age}</small>
                </p>
                <p className="card-text">
                  <small>Country: {country}</small>
                </p>
                <p className="card-text">
                  <small>Salary: {salary}</small>
                </p>
                <button
                  onClick={() => props.handleAddHeroes(props.hero)}
                  className="btn btn-dark"
                >
                  <i className="fas fa-shopping-cart"></i> Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}


export default Hero;
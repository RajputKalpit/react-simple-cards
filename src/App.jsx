import React from "react";
import './App.css';

let App = ({img,name,intro}) => {
  return(
   <>
   <div className="card flex flex-col justify-center items-center">
      <div className="card__image-wrapper">
        <img src={img} alt="kalpit" className="card__image" />
      </div>
      <h2 className="card__title"> {name} </h2>
      <p className="card__intro text-center"> {intro} </p>
   </div>
   </>
 )
}

export default App;
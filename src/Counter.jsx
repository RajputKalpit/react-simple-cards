import React, { useState } from "react";
import './Counter.css';

let Counter = () => {

    let [count, setCount] = useState(0);

    return(
    <>
    <div className="counter w-3/6">
        <div className="counter__display text-center"> {count} </div>
        <div className="counter__buttons flex justify-evenly">
        <a href="javascript:;" className="counter__decrease flex align-center justify-center" onClick={()=>{
            if(count > 0){
                setCount(count-1)
            }
            }}> - </a>
            <a href="javascript:;" className="counter__increase flex align-center justify-center" onClick={()=>{
                setCount(count+1)

            }}> + </a>
           
        </div>
    </div>
    </>
    )
}

export default Counter;
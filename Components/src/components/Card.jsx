// import React from "react";
import '../css/card.css';
const  Card = (props)=>{
    
    return (
        <>
            <div className="container">
                <h1>Hello</h1>
                <h1>{props.num}</h1>
                <h2 className="cart-name">{props.name}</h2>
                <img className="cart-img" src={props.data.avatar} />
                <p className="cart-cuisine">{props.data.city}</p>
                <p className="cart-cuisine">{props.data.country}</p>
            </div>
           
            
        </>
    )
}

export default Card;

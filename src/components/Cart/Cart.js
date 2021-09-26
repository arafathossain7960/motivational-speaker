import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck  } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';


const Cart = (props) => {

    const {cart}=props;
    let total =0;
    for(const speaker of cart){
    total= total+speaker.payableHonorarium;
    }
    return (
        <div className="cart-style">
            <h1>Selected Speakers</h1>
            <h2 className="total-speakers">Total Speakers : <span>{cart.length}</span> </h2>
            <h2>Total speaker Cost: $ {total}</h2>
          <ol>
             {
                 cart.map(speaker =><li>{speaker.name}</li>)
             } 
          </ol>
            <button className="confirm-btn"> 
            <FontAwesomeIcon className="confirm-icon" icon={faCheck} /> 
            Confirm Now  </button>
        </div>
    );
};

export default Cart;
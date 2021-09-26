import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Speaker from '../Speaker/Speaker';
import './AllSpeakers.css';

const AllSpeakers = () => {
    const [speakers, setSpeaker]=useState([]);

    const [cart, setCart]=useState([]);

    const handleSelectedSpeakers =speaker=>{
        const newCart = [...cart, speaker];
        setCart(newCart);
    }

    useEffect(()=>{
        fetch('./speakers21.JSON')
        .then(res => res.json())
        .then(data => setSpeaker(data))
    },[])
    return (
        <div  className="speaker-container">
            {/* speaker component  */}
         <div className="all-speaker-container">
                    <div className="speaker-style" >
                    {
                        speakers.map(speaker => <Speaker
                        key={speaker.name}
                        handleSelectedSpeakers={handleSelectedSpeakers}
                        speaker={speaker}
                        ></Speaker>)
                    }
             </div>
            </div>
            {/* cart component  */}
            <div className="selected-speaker-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default AllSpeakers;
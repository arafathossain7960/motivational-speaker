import React, { useEffect, useState } from 'react';

const AllSpeakers = () => {
    const [speaker, setSpeaker]=useState([]);


    useEffect(()=>{
        fetch('../../speakers21.JSON')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            <div>
                <div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllSpeakers;
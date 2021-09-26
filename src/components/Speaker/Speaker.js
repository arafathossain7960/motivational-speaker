import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointer } from '@fortawesome/free-solid-svg-icons'
import { SocialIcon } from 'react-social-icons';
import './Speaker.css'

const Speaker = (props) => {
    const {imgUrl, name, age, country, payableHonorarium,profession }=props.speaker;
    const {handleSelectedSpeakers}=props;
    return (
           <div className="single-speaker">
               <img  src={imgUrl} />
               <div className="speaker-contain">
               <h2> {name}</h2>
               <hr />
               <h3>Age : {age}</h3>
               <h3>Country :  {country}</h3>
               <h3>Profession : {profession}</h3>
               <h3>Honorarium : $ {payableHonorarium}</h3>
               
           </div>

           {/* button  and icon container  */}
           <div className="speaker-bottom">
           <button
           onClick={()=>handleSelectedSpeakers(props.speaker)}
           className="speaker-btn"> <FontAwesomeIcon icon={faHandPointer} /> Select</button>

           <br />
           <br />
                    
           <SocialIcon style={{width:"30px", color:'blue',marginRight:'10px'}} url="https://twitter.com" />

           <SocialIcon style={{width:"30px", color:'blue',marginRight:'10px'}} url="https://www.facebook.com" />

           <SocialIcon style={{width:"30px", color:"#ffff",marginRight:'10px'}} url="https://www.youtube.com" />

           <SocialIcon style={{width:"30px", color:'blue',marginRight:'10px'}} url="https://www.instagram.com" />
          
           </div>
     </div>
    );
};

export default Speaker;
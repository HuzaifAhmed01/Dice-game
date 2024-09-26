import { useState } from 'react';
// import React from 'react';
import '../assets/Styles/Ludo.css'
import logo1 from '../assets/Images/Dice1.png';
import logo2 from '../assets/Images/Dice2.png';
import logo3 from '../assets/Images/Dice3.png';
import logo4 from '../assets/Images/Dice4.png';
import logo5 from '../assets/Images/Dice5.png';
import logo6 from '../assets/Images/Dice6.png';



const Ludo = () => {
      let [dice,setDice]=useState("logo1")
     let play=()=>{
      let x=Math.ceil(Math.random()*6);
      switch(x){
        case 1:
        setDice(logo1)
        break;
        case 2:
        setDice(logo2)
        break;
        case 3:
        setDice(logo3)
        break;
        case 4:
        setDice(logo4)
        break;
        case 5:
        setDice(logo5)
        break;
        case 6:
        setDice(logo6)
        break;
      
      }

     }

  return (
    <>

    <div className="page">
        <div className="Img">
          {/* <h1>{count}</h1> */}
           <img src={dice} alt="" /> 

        </div>
<div className="button">
<button onClick={()=>play("logo")}>click</button>

</div>
       

    </div>

    </>
    
  )
}


export default Ludo


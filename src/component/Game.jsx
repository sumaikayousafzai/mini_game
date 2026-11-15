import {useState} from "react";
function Game(){
  const [number,setnumber]= useState("");
function handleGuess(){
  if(number==7){
    alert("You Won");
  }
  else if( number< 7){
alert ("Too low");
  }

else {
    alert("Too High!");
}
}
 
  return<>
  <div className="game-container">

  <h2 className="game-title">
  Guess the number!
  </h2>

  <p className="game-subtitle">
  Can you guess the numner?
  </p>

  <div className="input-box">
<label className="input-label">enter the number</label>

  <input className="game-input" type="number" 
  onChange ={(e)=> setnumber(e.target.value)}
  /></div>
  <p>Your Guess: {number}</p>
  <button className="game-btn"onClick={handleGuess} >Guess!!</button>
  </div>
  </>
}
export default Game
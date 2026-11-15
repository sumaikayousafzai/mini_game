import {useState} from "react";
function Game(){
  const [number,setnumber]= useState("");
  const [message,setmessage]= useState("");
  const[attempts,setAttempts]=useState(0)

function handleGuess(){
   setAttempts(attempts + 1)
  if(number==40){
    setmessage("🎉 you won");
  }

  else if( number< 40){
setmessage("Too Low 😢");
  }

else {
    setmessage("Too High 😱");
}
}

function resetGame() {
    setnumber("");
    setmessage("");
    setAttempts(0);
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
<label className="input-label">Enter the number</label>
<p> Attempts :{attempts}</p>

  <input className="game-input" type="number" 
  onChange ={(e)=> setnumber(e.target.value)}
  /></div>
  <p>Your Guess: {number}</p>
  <h2>{message}</h2>
  <button className="game-btn"onClick={handleGuess} >Guess!!</button><br/> <br/>
    <button className="game-btn"onClick={resetGame} >Play again!!</button>
  </div>
  </>
}
export default Game
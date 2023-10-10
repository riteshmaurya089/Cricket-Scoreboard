import React, { useState } from "react";
const initialScore =0;
const initialBalls =0;
const initialOvers =0;

const ScoreBoard =() => {
const [scoreBoard, setScoreBoard]=useState(initialScore);
const[balls, steBalls]=useState(initialBalls);
const[overs, steOvers]=useState(initialOvers);
const run="run";
const runs="runs";

// const handleZero=()=>{
//     setScoreBoard(scoreBoard+0);
//     steBalls(balls+1);
// }

// const handleOne=()=>{
//     setScoreBoard(scoreBoard+1);
//     steBalls(balls+1);
// }

// const handleTwo=()=>{
//     setScoreBoard(scoreBoard+2);
//     steBalls(balls+1);
// }

const handleScore=(value)=>{
    console.log("function called",value);
    setScoreBoard(scoreBoard+value);
    steBalls(balls+1);
};

const extraRun=(value)=>{
setScoreBoard(scoreBoard+value);
}
console.log(scoreBoard);
console.log(balls);

return (
<div>
    <h1>Score Board</h1>
    <h1>Score :{scoreBoard}</h1>
    <h1>
        Total Balls :{balls}
        </h1>
        <h1>Overs:{Math.floor(balls/6)}.{balls%6}</h1>
    <button onClick={()=>handleScore(0)}>0 {run}</button>
    <button onClick={()=>handleScore(1)}>1 {run}</button>
    <button onClick={()=>handleScore(2)}>2 {run}</button>
    <button onClick={()=>handleScore(3)}>3 {run}</button>
    <button onClick={()=>handleScore(4)}>4 {run}</button>
    <button onClick={()=>handleScore(6)}>6 {run}</button>
<button onClick={()=> extraRun(1)}>wide ball</button>
<button onClick={()=> extraRun(1)}>Noball</button>

</div>
);
};
export default ScoreBoard;
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

let state = undefined;

fetch("http://localhost:7777/data")
    .then(data=>data.json())
    .then(json=>{
        state=json;
        console.log("the state", state);
        render();
    })



function handleModifiedAnswerVotes(answerId,increment){
    state.answers = state.answers.map(answer=>{
        if(answer.answerId!==answerId){
            return answer;
        }else{
            return{...answer, upvotes:answer.upvotes + increment}
        }
    });
    render();
  
}


function render(){
    ReactDOM.hydrate(<App {...state} handleModifiedAnswerVotes={handleModifiedAnswerVotes}/>,document.querySelector("#Container"));
}

//render();


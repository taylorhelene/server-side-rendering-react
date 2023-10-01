import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import { handleModifiedAnswerVotes } from '../shared/utility';

let state = undefined;

fetch("http://localhost:7777/data")
    .then(data=>data.json())
    .then(json=>{
        state=json;
        console.log("the derived state", state);
        render();
    })

// http://localhost:7777/data to see data

function handlVote(answerId,increment){
    state.answers = handleModifiedAnswerVotes(state.answers,answerId,increment)
    
    render()
}


function render(){
    ReactDOM.hydrate(<App {...state} handleModifiedAnswerVotes={handlVote}/>,document.querySelector("#Container"));
}

//render();


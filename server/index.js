// this was befor we added babelrc file, we can now use es6 scripts const express = require ('express');
import React from 'react';
import express from 'express';

import {readFileSync} from 'fs';
import {renderToString} from 'react-dom/server';

import { App } from '../client/App';

import { handleModifiedAnswerVotes } from '../shared/utility';

const data = {
    questions:[{
        questionId:"Q1",
        content:"Should we use Jquery or Fetch for Ajax?"
    },
    {
        questionId:"Q2",
        content:"What is the best feature of React?"
    },
    {

        questionId:"Q3",
        content:"Which back end solution should we use for our application?"

    },
    {

        questionId:"Q4",
        content:"What percentage of developer time should be devoted to end-to-end testing?"

    }
    ],
    answers:[{
        answerId: "A1",
        questionId: "Q1",
        upvotes: 2,
        content: "JQuery"
    },
    {
        answerId: "A2",
        questionId: "Q1",
        upvotes: 1,
        content: "Fetch"
    },
    {
        answerId: "A3",
        questionId: "Q2",
        upvotes: 1,
        content: "Performance"
    },
    {
        answerId: "A4",
        questionId: "Q2",
        upvotes: 2,
        content: "Ease of Use"
    },
    {

        answerId:"A5",
        questionId:"Q3",
        upvotes:2,
        content: "Apache"

    },{

        answerId:"A6",
        questionId:"Q3",
        upvotes:0,
        content:"Java"

    },
    {

        answerId:"A7",
        questionId:"Q3",
        upvotes:4,
        content:"Node.js"

    },{

        answerId:"A8",
        questionId:"Q4",
        upvotes:2,
        content:"25%"

    },{

        answerId:"A9",
        questionId:"Q4",
        upvotes:1,
        content:"50%"

    },{

        answerId:"A10",
        questionId:"Q4",
        upvotes:1,
        content:"75%"

    }
    ]
}

const app = new express();

app.use(express.static("dist"));

app.get("/vote/:answerId",(req,res)=>{
    const{query,params} = req;
    data.answers = handleModifiedAnswerVotes(data.answers,params.answerId, +query.increment);
    res.send("OK");
})

app.get("/data",async(_req, res)=>{
    res.json(data);
})
app.get('/',async (_req,res)=>{
    const index = readFileSync('public/index.html','utf8');
    const rendered= renderToString(<App {...data} />);
    res.send(index.replace("{{rendered}}",rendered));
    

})

app.listen(7777);
console.info("listen");
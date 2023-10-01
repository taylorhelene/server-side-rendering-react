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
    }
    ]
}

const app = new express();

app.use(express.static("dist"));



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
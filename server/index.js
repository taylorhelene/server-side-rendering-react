// this was befor we added babelrc file, we can now use es6 scripts const express = require ('express');
import React from 'react';
import express from 'express';

import {readFileSync} from 'fs';

const app = new express();

app.use(express.static("dist"));
app.get('/',async (_req,res)=>{
    const index = readFileSync('public/index.html','utf8')
    res.send(index);
    //res.send(
     //   '<h1>REACTING</h1>'
    //)

})

app.listen(7777);
console.info("listen");
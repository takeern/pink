// koa
const Koa = require('koa');
const app = new Koa();
import koaRouter from 'koa-router';
const cors = require('koa2-cors');

// react
import React from 'react';
import { renderToString } from 'react-dom/server';
import Ssr from '../src/entry_server';
import { readFileSync } from 'fs';

// debug
const debug = require('debug')('app:server');

// lib
import 'isomorphic-fetch';
const { ssrRender } = require('duck-core');
const json = require('../dist/clientName.json');
// debug(ssrRender(json));

const router = koaRouter();

app.use(cors({
    origin: function() {
        return '*';
    },
    exposeHeaders: [ 'WWW-Authenticate', 'Server-Authorization' ],
    maxAge: 5,
    credentials: true,
}));



router.get('/favicon.ico', async ctx => {
    ctx.body = 'ok';
});
  

router.get('/dist/*', async ctx => {
    debug(ctx.path);
    if(ctx.path.indexOf('.css') !== -1) ctx.type = 'text/css';
    if(/(gif|png|jpeg|jpg?g)$/.test(ctx.path)) ctx.type = 'image/jpeg';
    ctx.body = readFileSync('.' + ctx.path);
});

router.get('/src/static/*', async ctx => {
    if(/(gif|png|jpeg|jpg?g)$/.test(ctx.path)) ctx.type = 'image/jpeg';
    ctx.body = readFileSync('.' + ctx.path);
});

router.post('/testRedux', async ctx => {
    const json = {
        img_src: './src/static/duck.png',
    };
    ctx.body = json;
});

router.get('*', async ctx => {  
    const { App, initState } = await Ssr(ctx.path);
    let html = renderToString(<App />);
    debug(initState);
    ctx.body = ssrRender(json, html, initState);
});


app.use(router.routes());
app.use(router.allowedMethods());

debug('server on 1111');
app.listen(1111);

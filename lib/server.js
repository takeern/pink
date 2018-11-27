// koa
const Koa = require('koa');
const app = new Koa();
import koaRouter from 'koa-router';

// react
import React from 'react';
import { renderToString } from 'react-dom/server';
import Ssr from '../src/entry_server';
import { readFileSync } from 'fs';

// debug
const debug = require('debug')('app:server');

// lib
const { ssrRender } = require('duck-core');
const json = require('../dist/clientName.json');
// debug(ssrRender(json));

const router = koaRouter();

router.get('/favicon.ico', async ctx => {
    ctx.body = 'ok'
})
  

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

router.get('*', async ctx => {  
    const App = Ssr(ctx.path);
    let html = renderToString(<App />);

    ctx.body = ssrRender(json, html);
});
// router.get('*', async ctx => {
//   ctx.type = 'html'
//   ctx.body = readFileSync('./dist/index.html')
// })

app.use(router.routes());
app.use(router.allowedMethods());

debug('server on 1111');
app.listen(1111);

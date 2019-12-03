const Koa = require('koa');
const app = new Koa();
const cors = require('koa2-cors');
const path = require('path');
import koaRouter from 'koa-router';
// const debug = require('debug')('app:server')
// import React from 'react'
// import { renderToString } from 'react-dom/server'
// import Ssr from './entry_server'
import { readFileSync, readFile } from 'fs';


const getFile = (pathname) => {
    return new Promise((resolve, reject) => {
        readFile(pathname, 'utf8', (e, data) => {
            if(e) {
                console.log(e);
                reject(e);
            } else {
                data = JSON.parse(data);
                resolve(data);
            }
        });
    });
};


const router = koaRouter();

app.use(cors({
    origin: function(ctx) {
        if(ctx.headers.origin === 'http://0.0.0.0:1212') {
            //www.ijosser.com:2222 || ip:2222
            return '*';
        }
        // return false;
        return '*';
    },
    exposeHeaders: [ 'WWW-Authenticate', 'Server-Authorization' ],
    maxAge: 5,
    credentials: true,
    // allowMethods: ['GET', 'POST', 'DELETE'],
    // allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));


router.get('/dist/*', async ctx => {
    if(ctx.path.indexOf('.css') !== -1) ctx.type = 'text/css';
    if(/(gif|png|jpeg|jpg?g)$/.test(ctx.path)) ctx.type = 'image/jpeg';
    ctx.body = readFileSync('.' + ctx.path);
});

router.get('/src/assets/*', async ctx => {
    if(/(gif|png|jpeg|jpg?g)$/.test(ctx.path)) ctx.type = 'image/jpeg';
    ctx.body = readFileSync('.' + ctx.path);
});

router.get('/api/getPageList', async ctx => {
    console.log('get page');
    const resData = {};
    
    const pageListData = await getFile('./parsePage/pageList.json');


    resData.code = 200;
    resData.data = pageListData.journal;

    ctx.body = {
        resData,
    };
});

router.get('*', async ctx => {
    ctx.type = 'html';
    ctx.body = readFileSync('./dist/index.html');
});



app.use(router.routes());
app.use(router.allowedMethods());
console.log('listen 2527');
app.listen(2527);

const Koa = require('koa');

const app = new Koa();

// ctx => middle ware (connects application and server)
// async / await (prevent from overlapping callbacks)
app.use(async(ctx, next) => {
    console.log(1);
    const started = new Date();
    next().then(() => {
        console.log(new Date() - started + 'ms');
    });
});

app.use((ctx, next) => {
    ctx.body = 'Hello Koa';
    next(); // execute next middle ware
});

app.listen(4000, () => {
    console.log('heurm server is listening to port 4000');
});

after you install nodemon 
$ npm install -g nodemon
$ nodemon --watch src/ src/koa.js
and add 
"scripts": {
    "start": "node src",
    "start:dev": "nodemon --watch src/ src/index.js"
} 
to the package.json, the server will automatically starts when you make changes.
The command that you write in the cmd will be yarn start. (In case you want to start it as a developer's mode, write yarn start:dev).

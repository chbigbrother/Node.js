//add parameter
//use router to make url path

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// router parameter / 
router.get('/', (ctx, next) => {
    ctx.body = 'home';
});

// router parameter /about
router.get('/about', (ctx, next) => {
    ctx.body = 'about';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(4000, () => {
    console.log('heurm server is listening to port 4000');
});

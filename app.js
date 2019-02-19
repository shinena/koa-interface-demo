const app = new (require('koa2'))()
const bodyParser = require('koa-bodyparser')
const middleWare = require('./middleware')

const router = require('./router')
const cors = require('koa2-cors')
app.use(bodyParser())
app.use(cors({
  origin: "*", // 允许来自所有域名请求
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  credentials: false, // 当设置成允许请求携带cookie时，需要保证"Access-Control-Allow-Origin"是服务器有的域名，而不能是"*";
  allowMethods: ['POST', 'PUT', 'GET', 'DELETE'],
  allowHeaders: ['Origin', 'Content-Type', 'X-Requested-With', 'X-BSD-Session-Token'],
}))

middleWare(app)

router(app)

app.listen(4000, () => {
  console.log('server is running at http://localhost:4000/banner')
})

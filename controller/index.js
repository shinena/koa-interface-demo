module.exports = {
  banner: ctx => ctx.response.body = require('../database/banner.json'),
  recommend: ctx => ctx.response.body = require('../database/recommend.json'),
  count: ctx => ctx.response.body = require('../database/count.json')
}

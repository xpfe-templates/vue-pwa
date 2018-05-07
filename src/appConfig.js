/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2018-05-04 09:53:55
 * @modify date 2018-05-04 09:53:55
 * @desc [app设置]
*/

const env = process.env.NODE_ENV
let htmlTitle = 'vue-ts' // html的title
let baseUrl = 'http://apitest.example.com' // api接口

if (env === 'production') {
  baseUrl = 'http://api.example.com'
}

export default {
  htmlTitle,
  baseUrl
}

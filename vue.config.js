const glob = require('glob')
const path = require('path')
const fs = require('fs')

const resolve = dir => path.join(__dirname, dir)

// 设置app别名, `@app`
const appAlias = {}

// App入口列表
const pages = (function (url) {
  const entries = glob.sync(url).map(item => {
    const urlArr = item.split('/')
    const oPath = urlArr.slice(0, 4).join('/')
    const page = {
      name: urlArr[3],
      entry: `${oPath}/app.js`,
      template: './public/index.html',
      filename: urlArr[3] === 'index' ? 'index.html' : `${urlArr[3]}/index.html`,
      title: urlArr[3]
    }

    // 设置app别名, `@app`
    appAlias[`@${urlArr[3]}`] = resolve(oPath)

    try { // 默认模板文件
      const tpl = `${oPath}/app.html`
      fs.accessSync(tpl, fs.constants.F_OK)
      page.template = tpl
    } catch (error) {
      // console.log('default template.')
    }
    try { // 单个App配置
      const cfg = `${oPath}/app.config.js`
      fs.accessSync(cfg, fs.constants.F_OK)
      const { title, output, chunks, disabled } = require(cfg)
      if (title) page.title = title
      if (output) {
        page.filename = output + '/index.html'
      } else if (output === '') {
        page.filename = 'index.html'
      }
      if (chunks) page.chunks = chunks
      page.disabled = !!disabled
    } catch (error) {
      // console.log('default config.')
    }
    return page
  })
  return entries.filter(item => !item.disabled).reduce((acc, item) => {
    acc[item.name] = item
    return acc
  }, {})
}('./src/app/**?/app.js'))

module.exports = {
  pages,
  configureWebpack: {
    resolve: {
      // 设置别名
      alias: {
        '@': resolve('src'),
        ...appAlias
      }
    }
  },
  chainWebpack(config) {
  }
}

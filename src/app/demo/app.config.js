module.exports = {
  title: '默认应用(仅开发环境)',
  output: 'demo',
  disabled: process.env.NODE_ENV === 'production'
}

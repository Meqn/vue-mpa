# vue-mpa

Vue多页面配置。

> Vue Multiple Page Application.

## 运行环境
> `vue-cli@3.x`  
> `> node@10.x`

```bash
➜  vue-mpa git:(master) ✗ vue -V
@vue/cli 4.5.13
```

**默认配置**

- vue@2.x
- vue-router@3.x (hash router)
- vuex@3.x
- Progressive Web App (PWA) Support
- Sass/SCSS (with node-sass)
- ESLint + Standard config
- Unit Testing + Jest
- E2E Testing + Cypress (Chrome only)


## 应用配置

**单个应用文件说明：**
- 入口文件 `app.js` `[必须]` 
- 模板文件 `app.html` `[非必须]`

### 1. 单应用目录 `./src/app/`

```
|_ src/app/
|____portal               # App目录名
| |____app.js             # vue入口文件 [必须]
| |____app.html           # vue模板 [非必须], 默认 `./public/index.html`
| |____App.vue            # vue入口组件 [非必须]
| |____app.config.js      # app配置文件 [非必须]
| |____views
| | |____Home.vue
| | |____About.vue
| |____store
| | |____index.js
| |____router
| | |____index.js
```

### 2. 单应用配置 `app.config.js`

```js
module.exports = {
  title: '商业门户',        // App标题
  output: 'portal/home',  // 输出路径, `{host}/portal/home/`，可为空
  disabled: true          // 是否禁用
}
```

### Compiles and hot-reloads for development
```
yarn dev
```

### Compiles and minifies for production
```
yarn build:prod

yarn build:stage
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

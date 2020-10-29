## 项目开发环境初始化

### 安装`vue3`

> cnpm install-g @vue/cli

### 创建vue项目

> vue create tools_xxxx
- 注意选择2.0项目

### 进入项目目录

> cd tools_xxxx

### 安装`electron`

> cnpm install electron

### 安装`vue-electron-builder`插件
> vue add electron-builder

### 安装`vuetify`
> vue add vuetify

### 注释`src/background.js`中
> await installVueDevtools()以及相关引用

### 启动
> yarn electron:serve

## 注意事项

- 执行模块安装时必须在项目文件夹内部执行
- clone安装时需要使用tyarn，不能用cnpm





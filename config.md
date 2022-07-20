# 项目添加TS
  - 创建 tsconfig.json 文件, 进行 ts 相关配置
  - install typescript
  - 
# 项目添加路由 react-router-dom
# 自定义打包
  - react-scripts 3.4 版本以下不支持 .env 文件
  - 升级到 3.4 版本, .env 文件可以配置打包目录 —— PUBLIC_URL=xxx
  - 自定义全局变量需要以 REACT_APP_ 开头。如：REACT_APP_AAA=xxx
# 不同环境
  - 下载 cross-env
    - npm i cross-env -D
  - 创建 .env.production 文件
    - 声明生产环境变量, 如：PUBLIC_URL=/xxx
  - 添加生产环境打包命令
    - "build:prod": "cross-env NODE_ENV=production react-scripts build"
    - 区别: 
      1. 新的打包命令 build:prod
      2. 添加 cross-env NODE_ENV=production 声明环境
# vite-vuecomonents-starter

使用 vite 打包 vue3 + ts 项目 案例

主项目

```shell
npm link
```

npm link 是 npm 提供的一个命令，用于在本地开发时链接不同的包，方便调试。
在全局node_modules 中创建一个符号链接，指向该包。

playground

```shell
pnpm link ../
```

在使用该包的项目目录执行 npm link <package-name>，会将全局的软链接映射到当前项目的 node_modules 中。

在 playground 的 node_modules 目录会出现 ‘vue-vuecomonents’ 依赖（出现主要项目打包的name）。

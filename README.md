# atkg-booking

<a href="https://github.com/vuejs/vue">
  <img src="https://img.shields.io/badge/vue-3.1.2-brightgreen.svg" alt="vue">
</a>
<a href="https://github.com/vuejs/pinia">
  <img src="https://img.shields.io/badge/pinia-2.0.14-brightgreen.svg" alt="pinia">
</a>

## 前言
基于 Vue3 + pinia + typescript，引用 Acro Design 组件库，方便开发。

## 功能

-   [x] Acro Design
-   [x] vite 3
-   [x] pinia
-   [x] typescript
-   [x] 登录/注销
-   [x] Dashboard
-   [x] 表格
-   [x] Tab 选项卡

## 安装步骤
> 因为使用vite3，node版本需要 14.18+

```
// 安装项目依赖，等待安装完成之后，安装失败可用 cnpm 或 yarn
npm install

// 运行
npm run dev

// 执行构建命令，生成的dist文件夹放在服务器下即可访问
npm run build
```

i18n-ally存在兼容性问题，如果不能正常显示翻译，执行以下命令
```
cd ~/.vscode/extensions/lokalise.i18n-ally-2.8.1
yarn add -D ts-node
```
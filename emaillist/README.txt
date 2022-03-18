1. 설치
   $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
   $ npm i react react-dom

2. 설정
   config/babel.config.json
   config/webpack.config.js

3. 스크립트 추가하기
   "scripts": {
   "debug": "npx webpack serve --config config/webpack.config.js --progress --mode development",
   "build": "npx webpack"
   }

실행
$ npm run debug
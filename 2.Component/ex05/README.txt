ex05 : Component - Life Cycle

01 : Class Component
  - Life Cycle Methods

02 : Functional Component Life Cycle(Alternative Life Cylce Methods)
  - useEffect Hook

1. 설치
   $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
   $ npm i react react-dom prop-types

2. 설정
   config/babel.config.json
   config/webpack.config.js

3. 스크립트 추가하기
   "scripts": {
   "debug": "npx webpack serve --config config/webpack.config.js --progress --mode development --env",
   "build": "npx webpack"
   }

실행
$ npm run debug src={01|02|03|04|..} (css-module은 무조건 true로 할꺼니까 이제 필요X)

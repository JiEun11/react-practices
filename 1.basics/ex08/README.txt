ex08: JSX Tutorials

01. 특징1 : HTML과 차이점
02. 특징2 : Single Root node
03. Function(함수) 컴포넌트 만들기
04. Pure React(React API)로 컴포넌트 작성하기
05. 클래스(Class) Component 만들기 (Hook 안 씀 따라서 life circle 및 상태관리 등을 관리하기 용이)
06. 특징3 : JSX 표현식 표기법 ({JS Expression}) ex)count + 1, fu() 등,but if(){}는 못 씀. 과 문제점 
07. 특징4 : 공백 
08. Dynamic HTML Rendering
09. Comments 사용

1. 설치 
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
$ npm i react react-dom

2. 설정
babel.config.json
webpack.config.js


3. npm scripting
"scripts": {
    "start": "npx webpack serve --progress --mode development --env",
    "build": "npx webpack"
  }


4. 실행 
$ npm run debug src={01|02|03 ...}  // src 안에 있는 애들을 명시, npx webpack serve --progress --mode development --env src=02 로 실행됨. 
                        //webpack이 webpack.config.js의 env읽어서 resolve('')를 변경해야함.
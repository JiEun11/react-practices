ex04: Application Bundling(번들링) - webpack

1. Webpack은 작게 분리된 많은 Application의 module(javascript, css, images, font)
   들의 '의존성을 분석'해서 하나의 JS 파일로 묶는 도구
2. 하나의 JS파일을 bundle이라고 하고 묶는 작업을 bundling이라고 한다.

3. bundling 단순히 모듈들을 하나의 파일로 묶는 작업만을 의미하지 않는다.

4. build 작업
  1) linting(ESLint, 문법 체크) 작업
  2) document 작업 (JSDoc) 작업
  3) test(Mocha, jest) 작업
  4) 난독화, 압축 작업(Uglyfy)
  5) Bundling 

5. Javascript뿐만 아니라 다양한 assets(image, css, font)들도 module로 취급한다.
6. 설치 
  $ npm i -D webpack webpack-cli
  $ npm ./node_modules/.bin/webpack --version
  $ npx webpack --version

7. package.json scription("build" stage)
8. $ npm run build (bundling 작업)
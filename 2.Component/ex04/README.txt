ex04 : Component - State

01 : 기본 개념
  1. state
    - 컴포넌트 내부의 현재 상태를 나타내는 쓰기 가능한 데이터
    - 컴포넌트는 this.state 안에 여러 데이터(상태)를 가질 수 있다.
    - this.state은 특정 컴포넌트 전용이며 변경을 위해서는 setState을 함수를 사용
    - 상태가 업데이트 되면 컴포넌트의 반응형(Reactive) Rendering이 트리거 되고 컴포넌트와 자식 컴포넌트가 다시 Rendering이 된다.
    - Component의 동작(event)과 상호작용을 수행할 수 있는 매커니즘을 제공한다.
    - Class Component에서는 constructor에서 초기화를 한다.
    - Class Component에서 상태 변경을 위해서는 setState 함수를 사용
    - Functional Component에서는 usetState hook 함수를 사용하여 초기화 한다.
    - Functional Component에서 상태 변경을 위해 useState hook 함수를 사용하고 반환된 배열의 두번째 배열 요소를 사용한다.
  2. 예제 : src/01


02 : 제어 Component
  1. input, textarea, option과 같은 폼 Component 중에 사용자 입력에 따라서 state값이 변경되고 Rendering 하는 Component를 제어(Controlled) Component라 한다.

  2. Form Component를 Controlled Component로 만드는 것은 조금 복잡해 보이지만 다음과 같은 장점이 있다.
    - Component의 interface를 외부에서 변경할 수 없고 내부의 상태 변경으로 가능하다는 것은 리액트 컴포넌트의 작성 원칙을 준수할 수 있다.
    - 사용자 입력 값에 대한 Validation을 할 수 있다.

  3. Form Component가 반드시 Controlled Component로 작성해야 하는 것은 아니다. 상태를 제어하지 않는 비제어(Uncontrolled) 컴포넌트로 만들 수 있다.
  4. 예제
    - src/02 : 제어 component
    - src/03 : 비제어 component


03 : 상태(Stateful) Component vs 순수(Pure, Dumb) Component
  1. 상태 컴포넌트
    - 상태를 관리하는 컴포넌트
    - 보통 상태 컴포넌트는 컴포넌트 계층에서 상위에 있다.
    - 상태 컴포넌트는 순수 컴포넌트를 하나 이상 래핑할 수 있다.
  2. 순수 컴포넌트
    - 상태관리 없이 속성(props)로 화면만 Rendering하는 컴포넌트
    - 재사용성이 좋다. 테스트 하기도 좋다.
  3. Application의 컴포넌트들은 상태 컴포넌트와 순수 컴포넌트로 분리하여 만드는 것이 좋다.(실무에서는 다 깨짐)
  4. 어떤 컴포넌트가 상태 컴포넌트인가?(원칙)
    - 상태를 기반으로 Rendering하는 컴포넌트 ex) 제어 컴포넌트
    - 많은 하위 컴포넌트를 가지고 있는 공통(하나)의 상위 부모 컴포넌트
    - 컴포넌트 hierachy에서 상위에 있는 상태를 가져야만 하는 컴포넌트
    - 못 찾겠으면 지금 emaillist처럼 상태를 관리하는 컴포넌트를 만들고 그림 그릴 때에는 하위 컴포넌트(pure component)를 wrapping한다.
  5. 예제
    - emaillist

04. Data Flow(Bottom -> Up)
  - emaillist

1. 설치
   $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
   $ npm i react react-dom

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

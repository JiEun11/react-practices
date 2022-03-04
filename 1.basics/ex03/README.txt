ex03: Application2 - application 분리 (ES6 module system 사용)

1. FrontEnd Application이 수십, 수백개로 분리된 경우, 
    브라우저에서 이 모듈들을 import하는 것은 상당히 비효율적이다.

2. FrontEnd Application은 자바 스크립트 외에 다양한 assets(css, images, font)에 로딩 동기화도 고려해야 함.
  - 
ex02: Application1 - application 분리 (file 분리) --> 결론 : error 발생 

1. 복잡한 application은 코드를 분리해서 개발하는 것이 원칙
2. application 코드를 여러 js 파일로 옮기는 단순한 방식 사용
  - 전통적인 분리 방식
  - browser js 파일의 로딩 순서를 보장하지 않는다.
  - 복잡하고 분리 파일이 많아지면 의존성 관리 자체가 불가능 
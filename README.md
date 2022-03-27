# React Practices

1. 기본 개념(Basics) \*
2. 컴포넌트(Component) \*
3. 라우팅(Routing) \*
4. Flux: Redux
5. Testing(rest)
6. Performance
7. 통합(Integration with BackEnd) \*
   - emaillist
   - gallery
   - mysite

---

## How browser rendering works

1. DOM tree 생성

   - render engine이 HTML을 parsing 하여 DOM 노드로 이루어진 tree 생성

2. Render tree 생성

   - css file과 inline 스타일을 parsing, DOM+CSSOM = Render tree 생성

3. Layout(reflow)

   - 각 노드들의 스크린에서의 좌표에 따라 위치 결정
   - position & size 등이 여기서 계산됨

4. Paint(repaint)
   - 실제 화면에 그림.

---

## How Virtual DOM works

- DOM Fragment의 변화를 묶어서 적용한 다음 기존 DOM에 던져줌

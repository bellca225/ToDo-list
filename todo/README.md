라이브러리 설치

1. yarn add react-icons

2. yarn add styled-components

yarn add styled-components react-icons

---

Component

1. TodoTemplate (흰 종이)
2. TodoHead (오늘의 날짜, 앞으로 해야할 일이 남은 갯수를 알려줌)
3. TodoList (오늘 할 일 목록을 만들 예정, map을 사용해 각각 항목(= todoLtem을 가리킴)을 렌더링)
   3-1. TodoItem (하나하나의 할 일 목록, 마우스 호버 시 쓰레기통 아이콘 나타남, 체크 버튼을 누르면 체크 아이콘이 나타나며 글자 색상이 연하게 변화)
4. TodoCreate (처음에는 파란 +버튼이 뜸, 클릭하면 입력창이 뜸, 엔터를 누르면 새로운 항목이 나타나면서 버튼이 빨간 X로 바뀐다. X를 누르면 입력창이 사라진다)

5. page에 회색 배경색상 적용 -> body에 global style 적용

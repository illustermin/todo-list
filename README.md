# 📝 ToDo List

React로 만든 심플한 투두리스트 애플리케이션입니다.  
할 일을 추가하고, 완료 표시하거나 삭제할 수 있습니다.
`useReducer`, `useMemo`, `Context API`를 활용하여 상태 관리를 구현하고, 검색, 삭제 기능 등을 포함하고 있습니다.

---

## 📸 데모

![todo demo](./screenshot.png)

---

## 🚀 주요 기능

- 할 일 추가 시 빈 문자열 입력 방지 및 자동 포커싱
- 할 일 완료 상태 체크 (isDone)
- 할 일 삭제 기능
- 실시간 검색 기능 (대소문자 구분 없이 검색 가능)
- 전체 할 일 수 / 완료 수 / 미완료 수 분석 기능 (`useMemo` 활용)
- `useReducer`를 사용한 복잡한 상태 로직 처리
- `Context API`를 활용한 전역 상태 공유

---

## 🛠 사용 기술

| 구분           | 내용                                                          |
| -------------- | ------------------------------------------------------------- |
| 💻 프레임워크  | React 18                                                      |
| ⚙ 상태관리     | useReducer, useContext, useMemo                               |
| 🎨 스타일링    | CSS Modules                                                   |
| 💬 커밋 컨벤션 | Conventional Commits 사용 (`feat`, `fix`, `refactor`, `init`) |

---

## 📦 설치 및 실행 방법

```bash
# 1. 레포지토리 클론
git clone https://github.com/illustermin/todo-list-app.git

# 2. 프로젝트 폴더 이동
cd todo-list-app

# 3. 의존성 설치
npm install

# 4. 개발 서버 실행
npm run dev
s

## 📁 프로젝트 구조

src/
├── assets/
│   └── images/
│       └── logo.jpg
│
├── components/g
│   ├── Editor/
│   │   ├── Editor.jsx
│   │   └── Editor.css
│   ├── List/
│   │   ├── List.jsx
│   │   └── List.css
│   ├── TodoItem/
│   │   ├── TodoItem.jsx
│   │   └── TodoItem.css
│   └── Header/
│       ├── Header.jsx
│       └── Header.css
│
├── App.jsx
├── App.css
└── index.js


## 커밋 히스토리 주요 변경점

| 타입      | 메시지                                       |
|-----------|----------------------------------------------|
| refactor  | useMemo를 사용해 불필요한 연산 제거           |
| refactor  | useReducer로 상태 관리 리팩토링               |
| fix       | 검색 필터 함수에 return 누락 수정             |
| feat      | todo delete 추가                             |
| feat      | todos 리스트 형태로 렌더링                    |
| feat      | focus input on empty todo                    |
| feat      | build initial UI with layout and basic styling |
| init      | 프로젝트 초기 설정                           |



🙋🏻‍♀️ 개발자
이름: 홍민주 (Minju Hong)

GitHub: @illustermin

```

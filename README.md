# git 사용법

cmd 아니면 git bash에서

1. git init
   =>깃 초기화 (저장소 생성)

2. git config --global user.name "Woneeee"
   =>내가 누군지 알려주기

3. git config ==global user.email "a6885088@naver.com"
   =>내가 누군지 알려주기2

4. git config --list
   =>리스트로 아이디, 이메일 등록되었는지 확인 (list 본 후에 q로 빠져나가기)

5. git remote add arigin 저장소url
   =>저장소 추가

6. git add .
   =>변경, 추가, 삭제 수정 내역 등 파일을 추가
   =>스테이징 단계까지 완료

7. git commit -m "메세지"
   =>커밋 등록

8. git push origin master
   =>원격 저장소 업로드

<!-- --------------------------------------------------------->

# Todo

### 설치할 라이브러리

- [x] react-router-dom
- [x] axios
- [x] tan-stack-query
- [x] styled-components
- [x] styled-reset
- [ ] react-helmet

### 작업 내용

- [x] 라우터 설정
- [x] 각 페이지 컴포넌트 구성
- [x] api 설정
- [x] 데이터 받아오기
- [x] 스타일
- [ ] 현재 위치 얻어오기
- [ ] 현재 위치에 맞는 날씨 정보 요청
- [ ] 코드 리팩토링
- [ ] 타이틀 설정
- [ ] 404 UI

### 레퍼런스

https://uxplanet.org/sky-inspired-weather-app-concept-4f1775ce4571

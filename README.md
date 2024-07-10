# git 사용법

cmd 아니면 git bash에서

1. git init
   =>깃 초기화 (저장소 생성)

2. git config --global user.name "Woneeee"
   =>내가 누군지 알려주기

3. git config --global user.email "a6885088@naver.com"
   =>내가 누군지 알려주기2

4. git config --list
   =>리스트로 아이디, 이메일 등록되었는지 확인 (list 본 후에 q로 빠져나가기)

5. git remote add origin 저장소url
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
- [x] react-helmet-async

### 작업 내용

- [x] 라우터 설정
- [x] 각 페이지 컴포넌트 구성
- [x] api 설정
- [x] 데이터 받아오기
- [x] 스타일
- [x] 현재 위치 얻어오기
- [x] 현재 위치에 맞는 날씨 정보 요청
- [x] 타이틀 설정
- [x] 코드 리팩토링

### 레퍼런스

https://uxplanet.org/sky-inspired-weather-app-concept-4f1775ce4571

## 배포

<li> 작업완료된 파일 커밋 시키기
<li> npm i gh-pages 설치
<li> package.json 코드 작성
<li> 홈페이지 주소 형식: 아이디.github.io/저장소명/
<li> 다시 커밋, 푸시
<li> npm run deploy (배포 완료시 published! 라고 뜸)
<li> 깃허브 사이트에서 settings -> pages -> branch 설정 변경 (pages로 바꿈)
<li> 저장소 페이지에서 우측 중간에 Deployments 클릭
<li> 배포상태 확인 후 사이트 주소 클릭

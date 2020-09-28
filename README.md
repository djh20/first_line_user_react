## 개발환경 설정

### Node.js 설치

https://nodejs.org/en/download/ 에서 운영체제에 맞는 Node.js를 설치

### 프로젝트 시작하기 
1. Project Clone (zip 다운, 명령어 실행 등의 방법)

2. 프로젝트 루트 경로에서(package.json 위치) 'npm install' 실행

4. 'npm start' 구동 (기본적으로 3000번 port로 진행)

6. http://localhost:3000 에서 확인 

> 현 코드 상 REST 요청은 "djh20.iptime.org:5000/~"으로 Proxy 되어 있음. 수정을 위해서는 /src/setupProxy.js에서 target을 수정 해주면 됨




### 의존성 

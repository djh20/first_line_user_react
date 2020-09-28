## 개발환경 설정

### Node.js 설치

https://nodejs.org/en/download/ 에서 운영체제에 맞는 Node.js를 설치

### 프로젝트 시작하기 
1. Project Clone (zip 다운, 명령어 실행 등의 방법)

2. 프로젝트 루트 경로에서(package.json 위치) 'npm install' 실행
> package.json 내의 dependencies를 자동으로 설치

3. PowerShell 관련 설정 (Windows에서만 발생하는 문제, Windows가 아니면 생략)
    3-1 환경변수 PATH에 'C:\Windows\System32\WindowsPowerShell\v1.0'를 등록 
        > 경로는 컴퓨터마다 상이할 수도 있음, 해당 경로 존재 확인 후 진행
    3-2 PowerShell을 관리자 권한으로 실행 후 'Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force' 실행
  
4. 'npm start' 구동 (기본적으로 3000번 port로 진행)
  http://localhost:3000 에서 확인 
> 현 코드 상 REST 요청은 "djh20.iptime.org:5000/~"으로 Proxy 되어 있음. 수정을 위해서는 /src/setupProxy.js에서 target을 수정 해주면 됨




## 의존 라이브러리

### Material UI

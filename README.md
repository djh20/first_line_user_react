## 개발환경 설정

  ### Node.js 설치

  https://nodejs.org/en/download/에서 운영체제에 맞는 Node.js를 설치
  ### yarn 설치
  https://classic.yarnpkg.com/en/docs/install/#windows-stable 에서 Yarn을 설치

  cmd 혹은 터미널에서 yarn -v로 설치 확인

  ### 프로젝트 시작하기 
  1. Project Clone (zip 다운, 명령어 실행 등의 방법)

  2. package.json의 dependencies에서  "@material-ui/icons" 행 삭제 후 저장(해당 행 3번 과정에서 오류 발생)

  3. 프로젝트 루트 경로에서(package.json 위치) 'yarn install' 실행

  4. 'npm install @material-ui/icons' 실행 (2번에서 삭제한 행, npm은 node.js에 포함되어 있음)

  5. 'yarn start' 구동 (기본적으로 3000번 port로 진행)

  6. http://localhost:3000 에서 확인 


  * 현 코드 상 REST 요청은 "djh20.iptime.org:5000/~"으로 Proxy 되어 있음.




### 의존성 

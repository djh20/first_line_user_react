## 개발환경 설정

### Node.js 설치

https://nodejs.org/en/download/ 에서 운영체제에 맞는 Node.js를 설치

### 프로젝트 시작하기

1. Project Clone (zip 다운, 명령어 실행 등의 방법)

2. 프로젝트 루트 경로에서(package.json 위치) 'npm install' 실행

   > package.json 내의 dependencies를 자동으로 설치

3. PowerShell 관련 설정 (Windows에서만 발생하는 문제, Windows가 아니면 생략)

   3-1 환경변수 PATH에 'C:\Windows\System32\WindowsPowerShell\v1.0'를 등록 > 경로는 컴퓨터마다 상이할 수도 있음, 해당 경로 존재 확인 후 진행

   3-2 PowerShell을 관리자 권한으로 실행 후 'Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force' 실행

4. 'npm start' 구동 (기본적으로 3000번 port로 진행)
   http://localhost:3000 에서 확인

   > 현 코드 상 REST 요청은 "djh20.iptime.org:5000/~"으로 Proxy 되어 있음. 수정을 위해서는 /src/setupProxy.js에서 target을 수정 해주면 됨

5. 혹시 package.json 또는 package-lock.json이 다른사람과 충돌나서 오류가 날 경우 npm.init으로 새로운 package.json을 만들지 말고 깃허브에 자신이 올렸던 package.json을 찾아서 그걸 복붙하면 됩니다.

6. This is probably not a problem with npm. + 어쩌구 저쩌구 이라는 에러가 뜨면
   1. vs코드를 일단 끄고 파일 탐색기에서 프로젝트 폴더로 이동하고 그 안에서 package-lock.json과 node_modules폴더를 삭제합니다.
   2. npm cache clean --force 명령어를 실행합니다.
   3. npm install 을 실행합니다.

## 의존성 라이브러리

### Material UI

Material Design 패러다임에 입각한 컴포넌트를 제공해주는 라이브러리
https://material-ui.com/ 에서 컨퍼런스와 예제 확인 가능

### react-router-dom

SPA인 리액트에 라우팅 기능을 추가해주는 라이브러리

```JSX
            <Router>
                <Switch>
                    <Route exact path="/post" component={PostUserView}/>
                    <Route exact path="/post/write" component={PostEditor}/>
                </Switch>
            </Router>
```

위 코드와 같이 주소에 따라 특정 컴포넌트로 라우팅

### MobX

Redux와 같은 예측 가능한 State 관리를 위한 라이브러리
Store의 state를 엑세스 함수를 통해 접근 및 수정

준수 사항

    1. Store 클래스는 반드시 Singleton Pattern으로 작성

    2. Store의 변수는 반드시 엑세스 함수를 통해서만 접근

참고 사이트

1. [React에서 Mobx 경험기 (Redux와 비교기)](https://woowabros.github.io/experience/2019/01/02/kimcj-react-mobx.html/)
2. [리액트 프로젝트에서 MobX 사용하기](https://velog.io/@velopert/MobX-2-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90%EC%84%9C-MobX-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-oejltas52z/)

# eim.frontend

### EIM Frontend Project 2019
_Everything in MapleStory_

> 본 리포지토리는 EIM 의 네이티브 리포지토리 입니다.

본 프로젝트는 현재 3개의 리포지토리를 가지고 있습니다.
* [프론트엔드 리포지토리](https://github.com/luke2327/eim.frontend)
* [네이티브 리포지토리](https://github.com/luke2327/eim.native)
* [백엔드 리포지토리](https://github.com/luke2327/eim.backend)

- - -

## 개발환경 셋팅
에디터는 VisualStudio Code 를 이용합니다.
문법관리는 eslintrc 를 이용해 관리합니다. (후에 추가 예정)... (추가 했지만 tslint 사용)

#### 필수 의존성 모듈 설치
1. node 를 설치합니다. (v10.16.0)
2. yarn 를 설치합니다. (`npm install yarn -g`)
3. react 를 설치합니다. (`yarn add react -g` or `npm install react -g` yarn 을 좀 더 권장드립니다.)

#### 리포지토리 클론
1. git clone [리포지토리 url]
2. `cd [리포지토리 이름] && ` (`yarn` or `npm install`)

## 실행 방법
#### 프론트엔드
`yarn start` or `npm run start`

## 업데이트
#### 프론트엔드
1. create-react-app 사용
2. babel-preset 적용 및 mobx 적용
3. 프로젝트 eject
4. 폴더 구조 셋팅 및 README 생성
5. react-router-dom 으로 route 구조 생성 및 enhance 컴포넌트 연동
6. vod 생성 및 연동
7. JS to TS 리뉴얼 (진행 중 : 2019. 09. 01 ~ )
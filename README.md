# mobi-2th-begginer-3

### 1주차

```
https://lyrical-brain-e0f.notion.site/mobi-beginner-week-3-0d1a1889390849729e292c60410a605e?pvs=4
```

### 기간

```
(공휴일로 인한 파격적인 기간 연장!!)
2023.12.24 ~ 2023.1.2
```

### 페어-편성

```
Pair-1: Noel - Rin
Pair-2: Kimi - Levi - Ann
Pair-3: Daniel - Jack - Amy
```

### 과제

```
1. RHF를 활용하여 회원가입 토이 프로젝트 만들기 + 생각해보기 정리하기
2. 나만의 보일러 템플릿 만들기
3. 느슨한 관계와 의존성 주입에 대한 관계에 대한 사례 만들기
4. 스파게티 코드 리팩터링 하기
```

### 진행방법

```
1. 페어는 각자 함께 할 수 있는 시간을 선정합니다.
2. 시간 선정이 완료되면 mobi 단톡방에 월~일요일 단위로 올려주세요.
ex)
  월 - 14:00~ 16:00
  화 - 16:00~ 18:00
  수 - 쉬는날
  목 - 18:00~ 20:00
  금 - 불금!
  토,일 - 14:00 ~ 22:00


2. 과제는 모두 페어와 함께 고민하여 문제를 풀이합니다.
3. 풀이한 과제는 해당 레포지토리에 브랜치에 Pair-n으로 commit-push 합니다.
4. 페어시간에는 항상 ZEP에 접속하여 문제를 풀이할 수 있도록 합니다.
```

### 주의사항

```
1. 결코 각자 문제를 풀이하여 나중에 비교하는 형태로하지 않고
   함께 생각하고 고민하며 문제를 풀이해볼 것

2. 과제를 반드시 완성해야하는 것은 아닙니다.
   그러나 여러분이 과제를 완성하지 못하면 저는 모비 2기라는 정해진 시간내에
   기획된 패스의 양을 점차 줄여나갈 것이며
   여러분들에게서 의욕이 느껴지지 않는다면 저도 의욕적으로 패스를 준비할 수가 없습니다.

   제가 모비 2기에 최선을 다할 수 있도록
   저에게 여러분들의 의욕을 보여주세요.
```

### 태크토크

일정

```
12월 31일(일) 오후 14시
WIL 시간과 동일
```

대상자

```javascript
발표 대상은 매주 바뀌어요! 혼자 힘들면 페어와 함께 준비해도 괜찮습니다 :)
억지로 발표 할 필요는 없어요.

너무 힘들다고 운영진한테 전달한다면 이번 주 테크 토크는 생략해도 됩니다!

이번주 발표 대상자 -> Rin
```

추천주제

```javascript
아래의 주제는 추천 주제일 뿐입니다.

본인이 배웠던 것들을 토대로 다른 분들에게 알려주고 싶은 것을
약 10분간 이야기할 수 있는 것이면 됩니다

이번주 추천 주제
1. RHF 공식 문서 1부터 10까지 파해치기
2. 자료구조 스택과 큐에 대하여, 자바스크립트에서 스택과 큐는 어떻게 사용되고 있을까?
```

https://hj-blog.github.io/frontend/Prettier/

## Member

Pair-1 [ Rin, Noel ]

## Develop Date

Develop: 2023.12.24 ~ 2023.1.2

| DATE  | CONTENT                                        |
| ----- | ---------------------------------------------- |
| 12/24 | 공휴일 휴식                                    |
| 12/25 | 시간 및 태스크 계획 수립                       |
| 12/26 | RHF 개념 공부                                  |
| 12/27 | RHF 사례 만들기 (미사용, RHF, YUP, Controller) |
| 12/28 | RHF 과제 요구사항 완료, 보일러 템플릿          |
| 12/29 | DI 의존성 주입 공부                            |
| 12/30 | DI 관심사분리 사례 만들기                      |
| 12/31 | spaghetti 코드 리팩토링 (hook, components)     |
| 1/1   | 정기 휴식                                      |
| 1/2   | spaghetti 리팩토링 (apis, routes) 완료         |

## Spaghetti Code 리팩토링

- 폴더구조

```
📦
 spaghetti
 ├─ dist
 │  ├─ assets
 │  │  ├─ index-50279273.js
 │  │  └─ index-6df824b5.css
 │  ├─ index.html
 │  ├─ mockServiceWorker.js
 │  └─ vite.svg
 ├─ index.html
 ├─ package-lock.json
 ├─ package.json
 ├─ public
 │  ├─ mockServiceWorker.js
 │  └─ vite.svg
 ├─ src
 │  ├─ App.jsx
 │  ├─ __mock__
 │  │  ├─ api
 │  │  │  └─ post.api.js
 │  │  ├─ browser.js
 │  │  ├─ data
 │  │  │  └─ post.data.js
 │  │  └─ handler.js
 │  ├─ apis
 │  │  ├─ _common.js
 │  │  ├─ post.api.js
 │  │  └─ weather.api.js
 │  ├─ app.css
 │  ├─ components
 │  │  ├─ Detail
 │  │  │  └─ Comment.jsx
 │  │  ├─ Home
 │  │  │  └─ Temperature.jsx
 │  │  └─ _common
 │  │     ├─ Dialog.jsx
 │  │     └─ PagiNation.jsx
 │  ├─ constants
 │  │  └─ Constant.js
 │  ├─ contexts
 │  │  └─ DiaLogProvider.jsx
 │  ├─ docs
 │  │  ├─ Link.md
 │  │  └─ README.md
 │  ├─ hooks
 │  │  ├─ useAxios.jsx
 │  │  └─ useDialog.jsx
 │  ├─ main.jsx
 │  ├─ pages
 │  │  ├─ Home.jsx
 │  │  ├─ Post.Detail.jsx
 │  │  └─ Post.List.jsx
 │  ├─ repository
 │  │  └─ StorageHandler.jsx
 │  ├─ routes
 │  │  ├─ BlurPrivateRouter.jsx
 │  │  ├─ PrivateRouter.jsx
 │  │  └─ Router.jsx
 │  └─ third-party
 │     ├─ index.js
 │     └─ weather.config.js
 ├─ vite.config.js
 └─ yarn.loc
```

### api 요청 함수 분리

- 기존 스파게티 코드에서 api주소를 요청하고 있던 로직들을 크게 base url이 api인 post와 기온 정보를 요청하는 wheather api 두 개로 나누었습니다.

### 공용 컴포넌트, 페이지 컴포넌트 분리

- 공용 컴포넌트 폴더에는 여러 페이지에 사용된 Dialog, Pagination을, Detail과 Home 폴더에는 각 페이지에서만 사용한 로직들 (Temperature와 Comment)을 분리해 컴포넌트화 시켰습니다.

### constant

- 기존 스파게티 코드 안에서 반복되는 키나 값을 상수화시켜 constant 폴더에 별도로 관리하였습니다. 이로써 유지보수의 능률이나 가독성을 좀 더 높을 수 있을거라 생각했습니다.

### hook 함수 분리

- 각 페이지마다 fetch를 사용하는 것은 가독성이 많이 떨어지고 재사용성이 매우 떨어진다고 생각하였습니다. 따라서 fetch를 기존 사용하였던 axios를 사용하여 useAxios로 분리시켰으며, d

### repository

### routes

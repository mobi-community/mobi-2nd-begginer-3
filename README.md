# mobi-2th-begginer-3

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

![](2024-01-02-23-23-24.png)

### 공용 컴포넌트, 페이지 컴포넌트 분리

- 공용 컴포넌트 폴더에는 여러 페이지에 사용된 Dialog, Pagination을, Detail과 Home 폴더에는 각 페이지에서만 사용한 로직들 (Temperature와 Comment)을 분리해 컴포넌트화 시켰습니다.

![](2024-01-02-23-26-01.png)

### constant

- 기존 스파게티 코드 안에서 반복되는 키나 값을 상수화시켜 constant 폴더에 별도로 관리하였습니다. 이로써 유지보수의 능률이나 가독성을 좀 더 높을 수 있을거라 생각했습니다.

### hook 함수 분리

- 각 페이지마다 fetch를 사용하는 것은 가독성이 많이 떨어지고 재사용성이 매우 떨어진다고 생각하였습니다. 따라서 fetch를 기존 사용하였던 axios를 사용하여 useAxios로 분리시켰으며, 비슷한 역할을 하는 Dialog또한 useDialog 훅으로 분리했습니다.

### repository

- localStorage 함수를 StorageHandler로 분리했습니다.

### routes

-

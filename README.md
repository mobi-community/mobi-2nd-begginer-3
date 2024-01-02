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



## 📝 React-hook-form

RHF의 목적과 기능에 대해 잘 배울 수 있었던 문제였습니다.

저희는 한 form에 Input을 모두 만들고, Validation에 해당 input의 키값과 step을 정의하였습니다.
현재 url의 step을 가져와서, 현재 해당하는 step과 일치할 경우 isShow 속성을 true로 전달하여 보이게
해주었습니다. 이렇게 해서 input의 값을 저장할 수 있는 줄 알았지만, peanut님의 팁을 듣고 localStorage를 사용해
저장하였습니다. 저장한 값은 RHF의 `defaultValue`를 사용해서 input에 자동으로 렌더링되도록 하였습니다.
또한 isValid 속성을 사용해서 각 인풋마다 schema의 유효성 검사가 통과되지 않는다면, 버튼이 비활성화되게 하였습니다.

Schema의 경우 저희는 step마다 다른 객체를 정의하고, 그 객체를 `totalSchema`로 묶는 방법을 사용했는데, 이를 배열로
리팩토링하였습니다. 배열을 사용하면 lastStep을 배열의 length를 알수 있고, 객체보다 가독성이 좋아져서 좋았습니다!

https://github.com/mobi-community/mobi-2th-begginer-3/assets/125418818/3e0a0979-7183-47da-9a7d-3399d3485732


### 📝 DI

관심사 분리에 대해 잘 이해하기 위해 많은 참고자료를 읽어 docs => link에 정리하였습니다.

#### 1. 전역 상태관리를 활용한 관심사 분리의 사례
   처음에 이 부분이 잘 이해가 안가서, 서칭해 공부한 결과 Context api가 의존성 주입을 위해 사용된다는 것을
   배웠지만 솔직히 아직도 잘 모르겠습니다.. 의미있는 예제를 찾다가, axios 모듈과 api 함수의 의존성을 분리하는
   사례가 인상적이었습니다. `Container`라는 하나의 객체 형태로 api 함수를 감싸서 props를 통해 axios 모듈을
   주입하는 방법인데, 이렇게 감싸서 의존성을 주입하는 방식은 다른 곳에도 활용이 가능할 것 같았습니다.

#### 2. 모듈화를 활용한 관심사 분리의 사례
   컴포넌트를 나누어 다양한 방식으로 컴포넌트를 조합할 수 있는 사례로 구상하였습니다. 공용 컴포넌트인 `Counter`를
   기능에 따라서 `Button`,`Status`,`Title`로 분리하고, 이를 조합하여 새로운 `EmotionCounter`, `LikeDislikeCounter`
   를 만들었습니다. 재사용을 많이 하는 컴포넌트를 잘 모듈화하면, 변화하는 요구사항에 맞춰 효율적인 컴포넌트 제작이 가능하다는 점을
   배웠습니다.

#### 3. 커스텀 훅함수를 활용한 관심사 분리의 사례
   커스텀 훅함수의 경우 `useInputs`이 가장 익숙하지만, 서버 데이터를 가져올 때 사용하는 `useFetch`를 사용해보고 싶었습니다.
   카카오의 이미지 검색 api를 사용하였고, 다음과 같은 3개의 훅함수를 사용해서 [검색 페이지, 결과 페이지]로 이루어진 간단한 이미지 검색 페이지를 만들었습니다.
   (1) useFetch :  axios가 아닌 fetch를 사용하였고, 첫번쨰 인자에는 url을 두번째 인자에는 header에 인증 키를 넣었습니다. isLoading과 Error를 state
  로 관리해서 data의 상태를 관리하여 사용하였습니다. 나중에 데이터 패칭 로직이 필요할 때 사용할 수 있다는 점이 좋았습니다.
  
  (2) useGoBack : 뒤로가기 로직이 담겨 있습니다. 뒤로가기도 자주 사용하는 로직이라면 이렇게 훅함수로 분리해도 괜찮다는 생각이 들었습니다. useCallback을 사용해
  함수 최적화를 하였습니다.
  
  (3) useInputs :  (생략)


#### 시연영상
https://github.com/mobi-community/mobi-2th-begginer-3/assets/125418818/b215ffff-4d50-4857-b283-7436d7cf563d


## 🍝 Spaghetti Code 리팩토링

- 폴더구조

```
📦
 spaghetti
 ├─ src
 │  ├─ App.jsx
 │  ├─ apis
 │  │  ├─ _common.js : axiosInstance가 들어있는 파일
 │  ├─ components
 │  │  ├─ Detail
 │  │  │  └─ Comment.jsx : 댓글 컴포넌트 분리
 │  │  ├─ Home
 │  │  │  └─ Temperature.jsx : 온도 컴포넌트 분리 
 │  │  └─ _common
 │  │     ├─ Dialog.jsx
 │  │     └─ PagiNation.jsx : 공용 페이지네이션 컴포넌트 분리
 │  ├─ constants
 │  │  └─ Constant.js : 숫자, 리터럴 상수화
 │  ├─ contexts
 │  │  └─ DiaLogProvider.jsx
 │  ├─ docs
 │  │  ├─ Link.md 
 │  │  └─ README.md
 │  ├─ hooks
 │  │  ├─ useAxios.jsx : axios 훅함수
 │  │  └─ useDialog.jsx  : dialog 관리 함수
 │  ├─ main.jsx
 │  ├─ pages
 │  │  ├─ Home.jsx
 │  │  ├─ Post.Detail.jsx
 │  │  └─ Post.List.jsx
 │  ├─ repository
 │  │  └─ StorageHandler.jsx
 │  ├─ routes
 │  │  ├─ BlurPrivateRouter.jsx : 로그인 안되었을 때 블러 처리하는 프라이빗 라우터 
 │  │  ├─ PrivateRouter.jsx : 로그인 안되었을 때 home으로 이동하는 프라이빗 라우터
 │  │  └─ Router.jsx
 │  └─ third-party
 │     ├─ index.js
 │     └─ weather.config.js
 ├─ vite.config.js
 └─ yarn.loc
```

### api 요청 함수 분리

- 기존 스파게티 코드에서 api주소를 요청하고 있던 로직들을 크게 base url이 api인 post와 기온 정보를 요청하는 wheather api 두 개로 나누었습니다.

![image](https://github.com/mobi-community/mobi-2th-begginer-3/assets/95909862/33e4ed80-14e1-4cb9-a6cf-e7b7e116e623)


### 공용 컴포넌트, 페이지 컴포넌트 분리

- 공용 컴포넌트 폴더에는 여러 페이지에 사용된 Dialog, Pagination을, Detail과 Home 폴더에는 각 페이지에서만 사용한 로직들 (Temperature와 Comment)을 분리해 컴포넌트화 시켰습니다.

![image](https://github.com/mobi-community/mobi-2th-begginer-3/assets/95909862/99754ee1-4c1c-4e9a-a211-ab5353cd4c6d)

![image](https://github.com/mobi-community/mobi-2th-begginer-3/assets/95909862/1574a9e7-79cc-4ac1-a2c2-935c7e4b7218)

### constant

- 기존 스파게티 코드 안에서 반복되는 키나 값을 상수화시켜 constant 폴더에 별도로 관리하였습니다. 이로써 유지보수의 능률이나 가독성을 좀 더 높을 수 있을거라 생각했습니다.

![image](https://github.com/mobi-community/mobi-2th-begginer-3/assets/95909862/6d65e851-1100-4a7b-bba6-0e39c3d3ffc8)

### hook 함수 분리

- 각 페이지마다 fetch를 사용하는 것은 가독성이 많이 떨어지고 재사용성이 매우 떨어진다고 생각하였습니다. 따라서 fetch를 기존 사용하였던 axios를 사용하여 useAxios로 분리시켰으며, 비슷한 역할을 하는 setDialogAttribue로직들 또한 useDialog 훅으로 분리했습니다.
- 재사용성을 위해 props로 다음과 같은 데이터를 전달 받았습니다.
`method` : get, post같은 http 메소드를 전달합니다.

`rerenderArr` : useEffect안에 들어가는 의존성 배열입니다. 해당 값이 바뀔 때마다 fetch가 실행됩니다.

`axiosInstance`: baseUrl이 달라서 만든 props입니다. axiosInstacne를 전달합니다.

`params`: 데이터 패칭에 필요한 params입니다.

`url` : 데이터를 요청할 세부 url입니다. 

 시간이 부족해 docs로 props로 정리하지 못했는데, 다음에는 해봐야 겠습니다!
 
- `data`,`isLoading`, `error`를 state로 관리해서 데이터 상태를 관리하였습니다. 

<img width="664" alt="스크린샷 2024-01-03 오전 1 18 22" src="https://github.com/mobi-community/mobi-2th-begginer-3/assets/125418818/59830e47-e645-46ce-b939-53ed66f43131">

- 다음과 같이 만든 useAxios 훅을 사용하였습니다. 이로 인해, 비즈니스 로직을 분리하고, 코드의 가독성이 좋아지는 장점이 있었습니다!
  
<img width="456" alt="스크린샷 2024-01-03 오전 1 24 48" src="https://github.com/mobi-community/mobi-2th-begginer-3/assets/125418818/4b05d880-688b-44bd-a4b1-a007f5d5729c">


### repository

- localStorage 함수를 StorageHandler로 분리했습니다.

![image](https://github.com/mobi-community/mobi-2th-begginer-3/assets/95909862/c51f16d3-ea19-4245-bfdb-d4459382bad7)

### routes

- 기존의 스파게티 코드에는 localStorage를 이용하여 블러처리를 하거나 alert를 띄우는 등 비슷한 로직들이 존재하여 어떻게 재사용시킬 수 있을까 고민하다가 private router를 사용하는 방안을 택했습니다.
- private router를 사용함으로써 인증해야만 접근 가능한 페이지를 설정하여 로그인 하지않은 사용자가 해당 페이지에 접근하는 것을 막을 수 있고, 중복되는 alert창을 사용했던 두 페이지를 private router에 상속시킴으로써 재사용성을 높일 수 있었습니다.

![image](https://github.com/mobi-community/mobi-2th-begginer-3/assets/95909862/44c66c59-da41-43f2-a717-97c3ea3643e8)

![image](https://github.com/mobi-community/mobi-2th-begginer-3/assets/95909862/585c1239-bc57-481c-a345-b8857ba93244)



## 📝 보일러 템플릿 

```
📦 
└─ template
   ├─ .eslintrc.js
   ├─ .gitignore
   ├─ .prettierrc.js
   ├─ README.md
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   │  ├─ favicon.ico
   │  ├─ index.html
   │  ├─ logo192.png
   │  ├─ logo512.png
   │  ├─ manifest.json
   │  └─ robots.txt
   └─ src
      ├─ App.css
      ├─ App.js
      ├─ App.test.js
      ├─ apis
      │  └─ core.js
      ├─ asset
      │  └─ DeleteIcon.svg
      ├─ components
      │  └─ common
      │     ├─ BasicButton.jsx
      │     ├─ Box.jsx
      │     └─ Space.jsx
      ├─ consts
      │  └─ query-key.jsx
      ├─ hooks
      │  ├─ useInputs.jsx
      │  └─ useModal.jsx
      ├─ index.css
      ├─ index.js
      ├─ layout
      │  └─ index.jsx
      ├─ logo.svg
      ├─ pages
      │  └─ index.jsx
      ├─ reportWebVitals.js
      ├─ router
      │  └─ router.jsx
      ├─ setupTests.js
      ├─ styles
      │  ├─ common.js
      │  ├─ global.js
      │  ├─ reset.js
      │  └─ theme.js
      └─ utils
         └─ timeHelper.jsx
```

## 💚 회고
혜린 : 지금까지 가장 에러가 많이 나고, 배운 것도 많았던 한 주 였습니다! DI에 대해 추상적으로만 이해했는데, 많은 사례를 보고 적용해보면서 이해를 할 수 있었습니다.
react-hook-form을 사용할 때, 제공하는 기능을 사용하니까 훨씬 좋았습니다. 필요한 기능이 있다면 해당 라이브러리에서 검색해서 활용하는 습관을 들여야 겠습니다. 
이번주에는 배운 게 많아서 블로그에 정리할 예정입니다!
마지막 스파게티 코드에서는 다른 페어의 코드를 참고해서 api 로직을 구현했는데, 도움이 많이 되었습니다!! 페어 노엘님 수고하셨습니다ㅎㅎ

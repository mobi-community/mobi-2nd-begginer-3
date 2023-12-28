1. 나만의 컴포넌트 폴더 구조
   apis
   |_ core
   const
   |_ index.js
   hooks
   |_ useInputs
   |_ useModal
   page
   |_ index.js
   router
   |_ router.js
   style
   |_ theme.js
   |_ global.js
   |_ reset.js
   |_ common.js
   components
   |_ Spacer.js
   |_ Box.js
   |_ Modal.js
   utils
   |\_ timeHelper (day.js, moment.js)
   layout (children)
   |_ header, footer
   repository
   |_ token-repository.js
   provider
   |_ auth-provider.js

   eslint
   prettier
   husky

   const num : number = 3

   library : react-route-dom / styled-components / eslint / prettier / axios / day.js /
   전역 상태 라이브러리 : recoil (클라이언트 데이터 관리) / react-query(서버 데이터 관리 : axios )

margin-top 대신
제목
..<Spacer size="20px"/>
글

import React from 'react';

const Spacer = ({ size }) => <div style={{ margin: size }} />;

width, height, border. color. children

export default Spacer;

2. 디자인 토큰에 영향이 없는 자주 사용하는 컴포넌트
3. 디자인 시스템 적용을 위한 모듈
4. 통일성 있는 코드 포멧팅을 위한 eslint와 prettier
5. api를 호출하 수 있는 http request 객체와 instance
6. 전역 상태 관리 라이브러리와 ui 라이브러리
7. day.js, moment.js, luxon과 같이 시간 관련 파싱 라이브러리
8. 자주 사용하는 유틸 함수와 커스텀 훅 함수

(1) 전역 상태관리를 활용한 관심사 분리의 사례
(2) 모듈화를 활용한 관심사 분리의 사례
(3) 커스텀 훅함수를 활용한 관심사 분리의 사례 // input, toggle,

도메인과 의존성이 있는 컴포넌트는 훅(커스텀 훅)을 사용하여 컴포넌트와 비즈니스 로직의 결합도를 최대한 낮춰야 함.
=> 커스텀 훅 : 비즈니스 로직 담당
=> 나머지 : 렌더링 UI 담당

두 객체 간 관계가 강하게 결합되는 것(커플링)을 방지하는 것이 중요

의존성을 선언하는데 있어서 중요한 점

1. 의존성은 교체가 가능해야 한다.
   객체가 다른 객체 안에 바로 직접적으로 결합된 상태이면 안된다.

context API

props
import 문 대신 props로 전달 받는 것 또한 의존성 주입의 한 종류

1. 투두리스트
2. 음원 보여주는 사이트

3. 앨범(Box, AlbumPhoto ), 곡명, 가수 => OneSongBox / OneSong
4. SongList
5. Header, Footer
6. 곡 등록 => useInputs , useFetch .. => useState같은 훅쓰면 뭐든 만들수 있음
7. context api : 곡 개수 / 한번에 보여주는 곡 개수? / 좋아요한 곡 개수 / 곡당 좋아요 수 mockdata

context api
<DependencyProvider serviceCreator={
createOrderServiceMock
}>
<OrderMovies/>
</DependencyProvider>

범용적인 컴포넌트

- 재사용성을 높이고, 결합도를 낮춰라
- 특정 페이지나 특정 컴포넌트에만 해당하는 코드를 적지 x

# wanted_pre_onboarding
## Toggle
  > 구현한 방법과 이유에 대한 간략한 내용
    => styled commponent를 사용하여 각 태그를 객체 처럼 사용
    => useState hook을 사용하여 토글 스위치 상태 관리

  > 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
    - styled commponent를 사용할 때 nested rules(중첩 규칙)을 활용하여 pseudd class를 사용하는 방법? 
    => https://styled-components.com/docs/api 공식 문서 활용(예제)

  > 자세한 실행 방법
    => ladel : 수도 선택자를 사용하여 원 모형의 스위치 처럼 만듬
    => input : z-imdex를 사용하여 토글 스위치 뒤로 보이지 않게 숨기고 클릭 하면 좌에서 우로 이동과 배경색을 변경
    => useState hook을 사용하여 input(type checkbox)를 디폴트 값으로 false 클릭하면 상태 값을 true를 변경 하여 상태 관리를 함

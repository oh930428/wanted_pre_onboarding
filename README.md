## Toggle

- 구현한 방법과 이유에 대한 간략한 내용

  - styled commponent를 사용하여 각 태그를 객체 처럼 사용
  - useState hook을 사용하여 토글 스위치 상태 관리

- 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)

  - styled commponent를 사용할 때 nested rules(중첩 규칙)을 활용하여 pseudd class를 사용하는 방법?
    - https://styled-components.com/docs/api 공식 문서 활용(예제)

- 자세한 실행 방법
  - ladel : 수도 선택자를 사용하여 원 모형의 스위치 처럼 만듬
  - input : z-imdex를 사용하여 토글 스위치 뒤로 보이지 않게 숨기고 클릭 하면 좌에서 우로 이동과 배경색을 변경
  - useState hook을 사용하여 input(type checkbox)를 디폴트 값으로 false 클릭하면 상태 값을 true를 변경 하여 상태 관리를 함

---

## Modal

- 구현한 방법과 이유에 대한 간략한 내용

  - styled commponent를 사용하여 각 태그를 객체 처럼 사용
  - useState hook을 사용하여 ModalButton의 상태 관리
  - isOpen의 조건이 false 이면 모달창 닫기 true 이면 모달창 오픈

- 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
  - 몇번 만들어 본 경험도 있어 크게 어려웠던 점은 없었습니다.

- 자세한 실행 방법
  - ModalButton의 초깃값(=상태값)은 false 클릭 시 true로 상태값이 변경
  - ModalButton의 상태값이 true 일 경우 ModalOverlay의 회색 배경에
  - ModalCloseButton 와 ModalTitle 포함된 ModalWrapper 오픈
  - ModalCloseButton을 클릭 시 모달창 닫힘

---

## Tab

- 구현한 방법과 이유에 대한 간략한 내용

  - styled commponent를 사용하여 각 태그를 객체 처럼 사용
  - useState hook을 사용하여 tabNum 상태 관리
  - tabNum의 상태값에 따라 각각 탭의 active 속성을 추가할지 결정하여 폰트 색깔과 배경색 변경

- 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
  - 몇번 만들어 본 경험도 있어 크게 어려웠던 점은 없었습니다.

- 자세한 실행 방법
  - TabLists안에 TabItem 각각의 탭 리스트를 생성되어져 있고
  - 각 TabItem를 클릭 시 
  - TabItem의 폰트색과 배경색 변경
  - TabContents에 쓰여진 문장에 tabNum 상태값을 적용하여 TabItem를 클릭 시 텍스트 변경

---

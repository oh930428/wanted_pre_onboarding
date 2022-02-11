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


## ClickToEdit

- 구현한 방법과 이유에 대한 간략한 내용

  - styled commponent를 사용하여 각 태그를 객체 처럼 사용
  - useState hook을 사용하여 (userName, userAge) FormInput 텍스트를 변경 시 입력
  - (changeName, changeAge) FormInput 텍스트를 변경 후 (FormNameWrapper,FormAgeWrapper)에  포함되지 않은 외부를 클릭시 변경한 텍스트를 입력
  - (changeName, changeAge) 변경된 텍스트를 span 태그 안에 적용

- 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
  1. FormInput 태그 안에서의 텍스트 변경시 상태 관리 가능했지만 외부를 클릭 시 상태 관리는 어려웠다
    => 두가지 경우를 먼저 나누었다 첫번째는 FormInput 태그에서 텍스트를 변경할때 필요한 useState 함수를 생성하고
    => useRef함수를 생성하여 FormNameWrapper와 FormAgeWrapper로 각각 나누어 외부를 클릭 할 수 있게 만들고
    => 외부 클릭이 성공 후 외부 클릭을 행동 되어지면 span 태그 안에 적용하니 해결!
  2. MouseEvent를 처음 사용
    => mdn 문서를 통해 mousedown 이벤트(처음 누르는 순간 시작)를 적용!

- 자세한 실행 방법
  - 이름, 나이 각 FormInput에 텍스트를 입력(수정) 
  - FormInput에 입력(수정)을 한 텍스트는 (userName, userAge)에 입력
  - FormNameWrapper 또는 FormAgeWrapper에 포함되지 않는 곳을 클릭(clickedOutside) 시
  - FormInput에 입력(수정)한 값을 (changeName, changeAge)에 입력 span에 적용 

---

## Tag

- 구현한 방법과 이유에 대한 간략한 내용

  - styled commponent를 사용하여 각 태그를 객체 처럼 사용
  - useState hook을 사용하여 tags(배열) 상태 관리
  - input 태그에 텍스트을 입력 후 Enter(키보드 입력) 시 
  - tags에 입력 (여러개의 tags를 입력 가능하게 하기위해 배열로 관리)

- 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
  1. 여러개의 Tag 생성 후 input 태그 크기 변화와 focus 될 때 border의 색깔 변경 미적용 되는 점
    => TagInputWrapper에 선택자 :focus-within를 사용하여 자식 요소인 input 태그에서 포커스 된 경우까지 스타일 적용되어 해결!

- 자세한 실행 방법
  - input 태그에 텍스트를 입력한다
  - Enter(키보드 입력) 시 addTags 함수 실행 되며 입력한 텍스트 tag(배열)에 입력 
  - css 적용된 Tag 출력
  - 여러번의 input 태그에 텍스트를 입력 시 tag(배열)에 저장 되고 저장 된 만큼 css 적용된 Tag 출력

---

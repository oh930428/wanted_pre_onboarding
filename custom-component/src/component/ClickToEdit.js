import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  width: 300px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const FormNameWrapper = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

const FormAgeWrapper = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

const FormInput = styled.input`
  height: 30px;
  text-align: center;
  font-weight: 600;
`;

function ClickToEdit() {
  const [userName, setUserName] = useState("");
  const [changeName, setChageName] = useState(userName);
  const [userAge, setUserAge] = useState("");
  const [changeAge, setChageAge] = useState(userAge);

  const nameRef = useRef();
  const ageRef = useRef();

  useEffect(() => {
    const clickedOutside = (e) => {
      if (!nameRef.current.contains(e.target)) {
        handleChange(e);
        setChageName(userName);
      }
      if (!ageRef.current.contains(e.target)) {
        handleChange(e);
        setChageAge(userAge);
      }
    };
    document.addEventListener("mousedown", clickedOutside);
    return () => {
      document.removeEventListener("mousedown", clickedOutside);
    };
  }, [nameRef, userName, userAge]);

  const handleChange = (e) => {
    if (e.target.id === "username") {
      return e.target.value === undefined ? "" : setUserName(e.target.value);
    } else if (e.target.id === "age") {
      return e.target.value === undefined ? "" : setUserAge(e.target.value);
    }
  };

  return (
    <>
      <FormWrapper>
        <FormNameWrapper ref={nameRef}>
          <label htmlFor="username">이름</label>
          <FormInput
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
            value={userName}
          />
        </FormNameWrapper>
        <FormAgeWrapper ref={ageRef}>
          <label htmlFor="age">나이</label>
          <FormInput
            type="text"
            name="age"
            id="age"
            onChange={handleChange}
            value={userAge}
          />
        </FormAgeWrapper>
        <span>
          이름 {changeName} 나이 {changeAge}
        </span>
      </FormWrapper>
    </>
  );
}

export default ClickToEdit;

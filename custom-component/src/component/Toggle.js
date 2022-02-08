import { useState } from "react";
import styled from "styled-components";

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 0;
`;

const ToggleSwitchLabel = styled.label`
  width: 80px;
  height: 30px;
  border-radius: 30px;
  background: #c2c2c2;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    margin: 4px 4px 4px 8px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }
`;

const ToggleSwitch = styled.input`
  position: absolute;
  opacity: 0;
  z-index: 1;
  border-radius: 30px;
  &:checked + ${ToggleSwitchLabel} {
    width: 80px;
    height: 30px;
    background: #4800cf;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      margin-left: 50px;
      transition: 0.5s;
    }
  }
`;

const ToggleStatus = styled.span`
  display: block;
  margin-top: 20px;
`;

function Toggle() {
  const [switchToggle, setSwitchToggle] = useState(false);
  const SwitchClick = () => {
    switchToggle ? setSwitchToggle(false) : setSwitchToggle(true);
  };
  return (
    <ToggleWrapper>
      <ToggleSwitch id="toggle" type="checkbox" onClick={SwitchClick} />
      <ToggleSwitchLabel htmlFor="toggle" />
      <ToggleStatus>Toggle Switch {switchToggle ? "ON" : "OFF"}</ToggleStatus>
    </ToggleWrapper>
  );
}

export default Toggle;

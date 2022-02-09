import { useState } from "react";
import styled from "styled-components";

const TabWrapper = styled.div`
  width: inherit;
  height: inherit;
  margin: 0px 20px;
  display: flex;
  flex-direction: column;
`;

const TabLists = styled.ul`
  list-style: none;
  height: 60px;
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const TabItem = styled.li`
  display: flex;
  align-items: center;
  flex: 1;
  height: 60px;
  font-size: 20px;
  cursor: pointer;
  background-color: #c2c2c2;
  &.active {
    background-color: #4800cf;
    color: #fff;
  }
`;

const TabContents = styled.div`
  display: flex;
  flex: 4;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

function Tab() {
  const [tabNum, setTabNum] = useState("ONE");
  const clickHandler = (id) => {
    setTabNum(id);
  };

  return (
    <>
      <TabWrapper>
        <TabLists>
          <TabItem
            className={tabNum === "ONE" ? "active" : ""}
            onClick={() => clickHandler("ONE")}
          >
            Tab1
          </TabItem>
          <TabItem
            className={tabNum === "TWO" ? "active" : ""}
            onClick={() => clickHandler("TWO")}
          >
            Tab2
          </TabItem>
          <TabItem
            className={tabNum === "THREE" ? "active" : ""}
            onClick={() => clickHandler("THREE")}
          >
            Tab3
          </TabItem>
        </TabLists>
        <TabContents>Tab menu {tabNum}</TabContents>
      </TabWrapper>
    </>
  );
}

export default Tab;

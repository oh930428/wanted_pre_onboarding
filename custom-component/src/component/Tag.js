import { useState } from "react";
import styled from "styled-components";

const TagInputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 40px;
  width: 480px;
  padding: 0 8px;
  border: 1px solid #d4d4d4;
  border-radius: 10px;
  &:focus-within {
    border-width: 2px;
    border-style: solid;
    border-top-color: #000;
    border-right-color: #9b75ed;
    border-bottom-color: #9b75ed;
    border-left-color: #000;
  }
  input {
    flex: 1;
    border: none;
    height: 40px;
    font-size: 14px;
    padding: 3px 0 0 0;
    &:focus {
      outline: transparent;
    }
  }
`;

const TagLists = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0 0 0;
`;

const TagItem = styled.li`
  width: auto;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 6px;
  margin: 0 8px 8px 0;
  background: #4800cf;
`;

const TagItemText = styled.span`
  display: block;
  font-weight: 600;
  margin: 0 4px;
  text-align: center;
`;

const TagItemCloseBtn = styled(TagItemText)`
  width: 16px;
  height: auto;
  background-color: #fff;
  border-radius: 50%;
  color: #000;
`;

function Tag() {
  const [tags, setTags] = useState([]);

  const addTags = (event) => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((value, index) => index !== indexToRemove)]);
  };

  return (
    <>
      <TagInputWrapper>
        <TagLists>
          {tags.map((tag, index) => (
            <TagItem key={index}>
              <TagItemText>{tag}</TagItemText>
              <TagItemCloseBtn onClick={() => removeTags(index)}>
                &times;
              </TagItemCloseBtn>
            </TagItem>
          ))}
        </TagLists>
        <input
          type="text"
          onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
          placeholder="Press enter to add tags"
        />
      </TagInputWrapper>
    </>
  );
}

export default Tag;

import styled from "styled-components";

const Title = styled.span`
  display: block;
  margin-top: 20px;
  color: #37352f;
  font-size: 20px;
`;

const Wrapper = styled.div`
  width: 700px;
  height: 290px;
  border: 1px solid #d4d4d4;
  border-radius: 10px;
  box-shadow: 2px 2px #e2e2e2;
  margin: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

function Container(props) {
  const { title, children } = props;
  return (
    <>
      <Title>{title}</Title>
      <Wrapper>{children}</Wrapper>
    </>
  );
}

export default Container;

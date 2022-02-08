import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Container from "./component/Container";
import Toggle from "./component/Toggle";

const GlobalStyle = createGlobalStyle`
  ${reset};

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-column: column;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container title="Toggle">
        <Toggle />
      </Container>
    </>
  );
}

export default App;

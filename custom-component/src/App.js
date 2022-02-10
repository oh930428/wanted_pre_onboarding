import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Container from "./component/Container";
import Modal from "./component/Modal";
import Toggle from "./component/Toggle";
import Tab from "./component/Tab";
import ClickToEdit from "./component/ClickToEdit";

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
      <Container title="Modal">
        <Modal />
      </Container>
      <Container title="Tab">
        <Tab />
      </Container>
      <Container title="ClickToEdit">
        <ClickToEdit />
      </Container>
    </>
  );
}

export default App;

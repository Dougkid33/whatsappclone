import styled from "styled-components";
import './App.css'
import Contactlist from "./components/contactlist";
import Conversation from "./components/conversation";

const Container = styled.div`
display: flex;
flex-direction: row;
height: 100vh;
width: 100%;
backgroud: #f8f9fb;
`;
function App() {
  

  return <Container>
    <Contactlist/>
    <Conversation/>
  </Container>
}

export default App

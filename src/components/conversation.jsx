/* eslint-disable react/jsx-key */
import { styled } from "styled-components";
import { SearchContainer, SearchInput } from "./contactlist";
import { messagesList } from "../Data";
const Container = styled.div`
display: flex ;
flex-direction: column;
height: 100%;
flex: 2;
background: #f6f7f8;
`;
const ProfileHeader = styled.div`
display: flex;
flex-direction: row;
background: #ededed;
padding: 15px;
align-items: center;
gap: 10px;
`;
const ProfileImage = styled.img`
width:40px;
height: 40px;
border-radius: 50%;
`;

const ChatBox = styled.div`
display: flex;
background: #f0f0f0;
padding: 10px;
align-items: center;
bottom: 0;
`;

const EmojiImage = styled.img`
width:30px;
height: 28px;
opacity: 0.4;
cursor: pointer;
margin: 5px;
`;

const MessageContainer = styled.div`
display: flex;
flex-direction: column;
height: 100%;
background: #e5ddd6;
`;


const MessageDiv = styled.div`
justify-content: ${(props) => (props.isYours ?'flex-end':'flex-start') };
display: flex;
margin: 5px 16px;
`;

const Message = styled.div`
background:  ${(props) => (props.isYours ?"#daf8cb":"white" )};
max-width: 50%;
color: #303030;
padding: 8px 10px;
font-size: 14px;
`;

const Conversation = () => {
    return <Container>
        <ProfileHeader>
            <ProfileImage src="/profile/profilepicture.jpg" />
            DougKid
        </ProfileHeader>
        <MessageContainer>
        {messagesList.map((messageData) => (
                <MessageDiv isYours={messageData.senderID === 0}>
                  <Message isYours={messageData.senderID === 0}>{[messageData.text]} </Message>
                </MessageDiv>
            ))}
        </MessageContainer>
        <ChatBox>
            <SearchContainer>
                <EmojiImage src={"/data.svg"} />
                <SearchInput placeholder="Digite uma mensagem..." />
            </SearchContainer>
        </ChatBox>

    </Container>
}

export default Conversation;
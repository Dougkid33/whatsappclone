/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { styled } from "styled-components";
import {contactList} from"../Data"; 


const Container = styled.div`
display:flex;
flex-direction: column;
height:100%;
width: 100%;
flex:0.8;

`;

const ProfileInfoDiv = styled.div`
display: flex;
flex-direction: row;
background: #ededed;
padding: 15px;
`;

const ProfileImage = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;

`;

const SearchBox = styled.div`
display: flex;
background: #f6f6f6;
padding: 15px;

`;

export const SearchContainer = styled.div`
display: flex;
flex-direction: row;
background: white;
border-radius: 16px;
width: 100%;
padding: 20px 0;

`;

const SearchIcon = styled.img`
width: 28px;
height: 28px;
padding-left: 10px;

`;

export const SearchInput = styled.input`
width:100%;
outline: none;
border: none;
padding-left: 15px;
font-size: 15px;
margin-left:10px;
`;
const ContactItem = styled.div`
display: flex;
flex-direction : row;
border-bottom: 1px solid #f2f2f2;
background: white;
cursor: pointer;
padding: 15px 12px;
`;

const ProfileIcon = styled(ProfileImage)`
width: 38px;
height: 38px;
`;


const ContactName = styled.span`
width: 100%;
font-size: 16px;
color:black;

`;

const MessageText = styled.span`
width: 20%;
font-size: 14px;
margin-top: 3px;
color: rgba (0,0,0,0.8);
`;

const ContactInfo = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin: 0 19px;
`;

const ContactComponent = (props) => {
    const { userData } = props;
    return <ContactItem>
        <ProfileIcon src={userData.profilePic}/>
        <ContactInfo>
            <ContactName>{userData.name}</ContactName>
            <MessageText> Eai?</MessageText>
        </ContactInfo>
        <MessageText> 14:09 </MessageText>
    </ContactItem>
    
};

const Contactlist = () => {

    return( 
        <Container>
        <ProfileInfoDiv>
            <ProfileImage src= "/profile/profilepicture.jpg"/>
        </ProfileInfoDiv>
        <SearchBox>
            <SearchContainer>
                <SearchIcon src={"/search-icon.svg"}/>
                <SearchInput placeholder="Procure ou converse.." />
            </SearchContainer>
        </SearchBox>
        {contactList.map((userData)=>(
        <ContactComponent userData={userData}/>
        ))}
          </Container>
    );
};

export default Contactlist;
// eslint-disable-next-line react/no-unknown-property
<span data-testid="menu" data-icon="menu"><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24" xml: space="preserve"><path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg></span>
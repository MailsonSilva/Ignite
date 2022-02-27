import React from 'react'

<<<<<<< HEAD
import {Container, Title} from './styles';
=======
import {
    Container,
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName
} from './styles';
>>>>>>> c91668fe02e535bc3198786132ee0e84bd4c6a35

export default function Dashboard() {
    return (
        <Container>
<<<<<<< HEAD
            <Title>Dashboard 2022</Title>
=======
            <Header>
                <UserInfo>
                    <Photo 
                        source={{ uri: 'https://avatars.githubusercontent.com/u/18700076?v=4.png'}}
                    />
                    <User>
                        <UserGreeting>Olá</UserGreeting>
                        <UserName>Mailson</UserName>
                    </User>
                </UserInfo>
               
            </Header>            
>>>>>>> c91668fe02e535bc3198786132ee0e84bd4c6a35
        </Container>
    )
}

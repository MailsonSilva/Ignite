import React from 'react'

import {
    Container,
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName
} from './styles';

export default function Dashboard() {
    return (
        <Container>
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
        </Container>
    )
}

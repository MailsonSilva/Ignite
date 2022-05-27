import React from 'react'
import { HighlightCard } from '../../components/HighlightCard/Index';
import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards,
} from './styles';

export default function Dashboard() {
    return (
        <Container>            
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo 
                            source={{ uri: 'https://avatars.githubusercontent.com/u/18700076?v=4.png'}}
                        />
                        <User>
                            <UserGreeting>Olá</UserGreeting>
                            <UserName>Mailson</UserName>
                        </User>
                    </UserInfo> 
                    <Icon name='power'/>                   
                </UserWrapper>               
            </Header>     

            <HighlightCards>       
                <HighlightCard/>       
                <HighlightCard/>       
                <HighlightCard/>       
            </HighlightCards> 

        </Container>
    )
}

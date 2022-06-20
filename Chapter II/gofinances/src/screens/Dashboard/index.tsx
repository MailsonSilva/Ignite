import React from 'react'
import { HighlightCard } from '../../components/HighlightCard/Index';
import TransactionCard from '../../components/TransactionCard';
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
    Transactions,
    Title
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
                <HighlightCard
                    type='up'
                    title='Entradas'
                    amount='R$ 17.400,00'
                    lastTransaction='Última entrada dia 13 de novembro'
                />       
                <HighlightCard
                    type='down'
                    title='Saídas'
                    amount='R$ 1.259,00'
                    lastTransaction='Última saída dia 9 de novembro'
                />
                <HighlightCard
                    type='total'
                    title='Total'
                    amount='R$ 16.141,00'
                    lastTransaction='01 à 16 de novembro'
                />     
            </HighlightCards> 

            <Transactions>
                <Title>Listagem</Title>

                <TransactionCard/>
            </Transactions>
        </Container>
    )
}

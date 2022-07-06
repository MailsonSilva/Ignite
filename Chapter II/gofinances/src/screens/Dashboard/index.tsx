import React from 'react'
import { HighlightCard } from '../../components/HighlightCard/Index';
import {TransactionCard, TransactionCardProps} from '../../components/TransactionCard';
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
    Title,
    TransactionsList
} from './styles';

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export default function Dashboard() {
    const data: DataListProps[] = [
        {
            id: '1',
            type: 'positive',
            title:"Deenvolvimento de site",
            amount:"R$ 12.000,00",
            category:{
                name: "Vendas",
                icon: "dollar-sign"
            },
            date:"06/07/2022"
        },
        {
            id: '2',
            type: 'negative',
            title:"Hmburguer",
            amount:"R$ 57,00",
            category:{
                name: "Lanche",
                icon: "coffee"
            },
            date:"06/07/2022"
        },
        {
            id: '3',
            type: 'negative',
            title:"Aluguel",
            amount:"R$ 12.000",
            category:{
                name: "Casa",
                icon: "shopping-bag"
            },
            date:"06/07/2022"
        }
    ];

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

                <TransactionsList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <TransactionCard data={item} />}
                    
                />
                
            </Transactions>
        </Container>
    )
}

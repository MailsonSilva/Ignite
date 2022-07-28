import React, { useState} from 'react';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input/Index';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeBuutton';

import { 
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionsTypes
 } from './styles';

export function Register() {
    const [transactionType, setTransactionType] = useState('');

    function handleTransactionType(type: 'up' | 'down') {
        setTransactionType(type);
    };

    return(
        <Container>
            <Header>
                <Title>
                   Cadastro
                </Title>
            </Header>

            <Form>
                <Fields>
                    <Input
                        placeholder="Nome"
                    />

                    <Input
                        placeholder="Preço"
                    />   

                    <TransactionsTypes>
                        <TransactionTypeButton
                            title='Income'                    
                            type='up'
                            onPress={() => handleTransactionType('up')}
                            isActive={transactionType === 'up'}
                        />

                        <TransactionTypeButton
                            title='Outcome'                    
                            type='down'
                            onPress={() => handleTransactionType('down')}
                            isActive={transactionType === 'down'}
                        />    
                    </TransactionsTypes> 
                </Fields>
                
                <Button
                    title='Enviar'
                />           
            </Form>

           

        </Container>
    );
}
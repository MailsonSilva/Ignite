import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    background-color: ${({ theme}) => theme.colors.shape};
    height: ${RFPercentage(20)}px;
    width: ${RFPercentage(34)}px;
    position: relative;
    top: ${RFPercentage(-10)}px;
    border-radius: 6px;
    padding: 14px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${RFValue(20)}px;;
`;

export const Title = styled.Text`

`;

export const Icon = styled(Feather)`

`;

export const Footer = styled.View`

`;

export const Amount = styled.Text`

`;

export const LastTransaction = styled.Text`

`;

import styled from 'styled-components/native'


export const TopContainer = styled.View`
    background-color: #e9e9e9;
    padding: 20px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const H1 = styled.Text`
    color: ${props => props.color || '#000'};
    font-size: 30px;
    font-weight: bold;
`;

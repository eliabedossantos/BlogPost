import styled from 'styled-components/native';


export const CardTitle = styled.Text`
    color: ${props => props.color || '#000'};
    font-size: 17px;
    font-weight: bold;
`;
export const CardContainer = styled.View`
    border-radius: 10px;
    margin-top: 20px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid rgb(21, 148, 229);
    overflow: hidden;
`;
export const CardHeader = styled.View`
    padding: 20px;
    background-color: rgb(21, 148, 229);
`;
export  const CardBody = styled.View`
    padding: 20px;
`;

export const CardFooter = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px 10px 20px;
`;
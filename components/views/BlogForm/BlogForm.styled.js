import styled from 'styled-components/native'

export const FormGroup = styled.View`
    width: 100%;
    height: 100%;
   
`;
export const Container = styled.View`
    width: 90%;
    height: 80%;
    background-color: #f2f5f9;
    padding: 10px;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 20px;
`;
export const LabelInput = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 10px;
`;
export const Input = styled.TextInput`
    background-color: #fff;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: 1px solid rgb(21, 148, 229);
    padding: 0 10px;
    margin-bottom: 10px;
`;
export const ButtonSubmit = styled.Button`
    background-color: rgb(21, 148, 229);
    width: 100%;
    height: 50px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;
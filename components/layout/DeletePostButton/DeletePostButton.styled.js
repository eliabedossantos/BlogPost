import styled from 'styled-components/native'
import { Button } from 'react-native-elements'

export const DeletePostButton = styled(Button).attrs({
    buttonStyle: {
        backgroundColor: 'transparent',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 5,
        width: 40,
        height: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})``;

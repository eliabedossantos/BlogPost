import React from 'react';
import { CardContainer, CardHeader,CardBody, CardFooter, CardTitle } from './CardPost.styled';
import { Text } from 'react-native-elements';
import EditPostButton from '../EditPostButton/EditPostButton';
import DeletePostButton from '../DeletePostButton/DeletePostButton';
export default props => {
    return (
        <CardContainer>
            <CardHeader>
                <CardTitle color="#fff">
                    {props.title}
                </CardTitle>
            </CardHeader>
            <CardBody>
                <Text>{props.body}</Text>
            </CardBody>
            <CardFooter>
                <EditPostButton onPress={props.onPressEdit} />
                <DeletePostButton onPress={props.onPressDelete} />
            </CardFooter>
        </CardContainer>
    );
}
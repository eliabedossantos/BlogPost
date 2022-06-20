import React from 'react';
import { Icon } from 'react-native-elements';
import { EditPostBtn } from './EditPostButton.styled';
export default props => {
    return (
        <EditPostBtn onPress={props.onPress} icon={<Icon name="edit" size={20} color="rgb(21, 148, 229)" />} />
    );
}

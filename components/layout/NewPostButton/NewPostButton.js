import React from 'react';
import { Icon } from 'react-native-elements';
import { NewPostBtn } from './NewPostButton.styled';

export default props => {
  return (
    <NewPostBtn onPress={props.onPress} icon={<Icon name="add" size={20} color="#fff" />} />
  );
};

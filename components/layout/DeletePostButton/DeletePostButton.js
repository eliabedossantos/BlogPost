import {DeletePostButton} from './DeletePostButton.styled';
import {Icon} from 'react-native-elements';

export default props => {
    return (
        <DeletePostButton onPress={props.onPress} icon={<Icon name="delete" size={20} color="red" />} />
    );
}
    
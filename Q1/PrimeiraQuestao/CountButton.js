import React from 'react';
import {Button} from 'react-native';

const CountButton = ({title, onPress}) => {
    return(
        <Button title={title} onPress={onPress}/>
    );
}
 export default CountButton;
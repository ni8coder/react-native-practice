import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomFormButton = props => {
  const {buttonText, onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        paddingVertical: 10,
      }}>
      <Text>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default CustomFormButton;

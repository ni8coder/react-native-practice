import React from 'react';
import {TextInput} from 'react-native';

function CustomTextInput(props) {
  const {placeholder} = props;
  return (
    <TextInput
      value={''}
      placeholder={placeholder}
      style={{
        marginVertical: 8,
        height: 44,
        backgroundColor: 'green',
        color: 'black',
      }}
    />
  );
}

export default CustomTextInput;

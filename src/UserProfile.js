import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomTextInput from './CustomTextInput';
import CustomFormButton from './CustomFormButton';

const UserProfile = () => {
  const submitHandler = () => {
    console.log('onpress called from user profile');
  };
  return (
    <View>
      <CustomTextInput />
      <CustomTextInput placeholder={'Last Name'} />
      <CustomTextInput placeholder={'Age'} />
      <CustomTextInput placeholder={'City'} />
      <CustomTextInput placeholder={'Country'} />
      <CustomFormButton
        buttonText="Submit"
        onPress={() => {
          console.log('onPress called');
        }}
      />
    </View>
  );
};

export default UserProfile;

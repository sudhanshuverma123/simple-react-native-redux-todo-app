import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#444',
    fontSize: 25,
    fontWeight: '500',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    height: 60,
    width: 50,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#444',
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };

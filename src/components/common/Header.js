// Import libraries for making a component
import React from 'react';
import { Text, View, Dimensions } from 'react-native';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: Dimensions.get('window').width,
    elevation: 6,
    position: 'absolute',
  },
  textStyle: {
    fontSize: 20,
    color: 'cyan',
    paddingTop: 15
  }
};

// Make the component available to other parts of the app
export { Header };

import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    padding: 0,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    paddingBottom: 4,
    paddingTop: 4
  }
};

export { CardSection };

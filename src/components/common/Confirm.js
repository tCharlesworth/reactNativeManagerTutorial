import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardItem } from './CardItem';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { containerStyles, textStyles, cardItemStyles } = styles;
  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={()=>{}}>
      <View style={containerStyles}>
        <CardItem style={cardItemStyles}>
          <Text style={textStyles}>{children}</Text>
        </CardItem>
        <CardItem>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardItem>
      </View>
    </Modal>
  );
};

const styles = {
  cardItemStyles: {
    justifyContent: 'center'
  },
  textStyles: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyles: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};

export { Confirm };
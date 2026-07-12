import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

interface Button {
  title: string;
  action: string;
}

interface Props {
  buttons: Button[];

  onAction?: (
    action: string
  ) => void;
}

const ButtonBlock = ({
  buttons,
  onAction,
}: Props) => {
  return (
    <View style={styles.container}>
      {buttons.map((button) => (
        <TouchableOpacity
          key={button.action}
          style={styles.button}
          onPress={() =>
            onAction?.(
              button.action
            )
          }>
          <Text style={styles.text}>
            {button.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ButtonBlock;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },

  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },

  text: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 16,
  },
});
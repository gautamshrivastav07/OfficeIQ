import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MessageBubble({ item }: any) {
  const isUser = item.sender === 'user';

  return (
    <View style={[styles.container, isUser ? styles.userContainer : styles.assistantContainer]}>
      <View style={[styles.bubble, isUser ? styles.userBubble : styles.assistantBubble]}>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    paddingHorizontal: 8,
  },
  userContainer: {
    alignItems: 'flex-end',
  },
  assistantContainer: {
    alignItems: 'flex-start',
  },
  bubble: {
    borderRadius: 18,
    padding: 14,
    maxWidth: '82%',
  },
  userBubble: {
    backgroundColor: '#0A84FF',
  },
  assistantBubble: {
    backgroundColor: '#1f1f1f',
  },
  text: {
    color: 'white',
    fontSize: 17,
    lineHeight: 24,
  },
});

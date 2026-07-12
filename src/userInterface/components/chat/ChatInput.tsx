import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

interface Props {
  onSend(text: string): void;
  maxHeight: number;
}

export default function ChatInput({ onSend, maxHeight }: Props) {
  const [text, setText] = useState('');
  const [inputHeight, setInputHeight] = useState(44);

  const send = async () => {
    if (!text.trim()) return;

    onSend(text);

    setText('');
    setInputHeight(44);
  };

  return (
    <View style={styles.wrapper}>

      {/* <TouchableOpacity style={styles.plus}>
        <Image
          source={require('../../../assets/images/add.png')}
          style={styles.plusImage}
        />
      </TouchableOpacity> */}

      <TextInput
        multiline
        value={text}
        placeholder="Message"
        placeholderTextColor="#888"
        onChangeText={setText}
        scrollEnabled={inputHeight >= maxHeight}
        style={[
          styles.input,
          {
            height: Math.min(Math.max(44, inputHeight), maxHeight),
          },
        ]}
        onContentSizeChange={(e) => {
          const reported = e.nativeEvent.contentSize.height || 0;
          // include internal vertical padding (top + bottom)
          const padded = Math.round(reported);
          const desired = Math.min(Math.max(44, padded), maxHeight);
          // avoid tiny fluctuations that cause visual jumping
          if (Math.abs(desired - inputHeight) > 2) {
            setInputHeight(desired);
          }
        }}
      />

      <TouchableOpacity
        onPress={send}
        style={styles.send}>
        <Image
          source={require('../../../assets/images/send_message.png')}
          style={styles.sendImage}
        />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#111',
    borderColor: '#333',
    borderWidth: 1,
    marginHorizontal: 8,
    borderRadius: 28,
    marginBottom: 12,
  },
  plus: {
    marginBottom: 8,
    marginRight: 8,
  },
  plusImage: {
    width: 26,
    height: 26,
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 17,
    backgroundColor: '#1d1d1d',
    borderRadius: 22,
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 12,
    maxHeight: 140,
  },
  send: {
    marginLeft: 10,
    marginBottom: 0,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#0A84FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendImage: {
    width: 20,
    height: 20,
  }
});
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenNames } from '../../../navigation/constant';

interface WelcomeScreenProps {
  navigation: any;
}

export default function WelcomeScreen({ navigation }: WelcomeScreenProps) {
  const [name, setName] = useState('');

  const onProceed = () => {
    if (!name.trim()) return;

    navigation.navigate(ScreenNames.CHAT_SCREEN, {
      userName: name.trim(),
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.content}>

          <View style={styles.logoContainer}>
            <Text style={styles.logo}>🤖</Text>
          </View>

          <Text style={styles.title}>Welcome to OfficeIQ</Text>

          <Text style={styles.subtitle}>
            Your intelligent workplace assistant.
          </Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>What should I call you?</Text>

            <TextInput
              placeholder="Enter your name"
              value={name}
              onChangeText={setName}
              placeholderTextColor="#999"
              style={styles.input}
              returnKeyType="done"
              onSubmitEditing={onProceed}
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            disabled={!name.trim()}
            style={[
              styles.button,
              !name.trim() && styles.buttonDisabled,
            ]}
            onPress={onProceed}>
            <Text style={styles.buttonText}>
              Proceed →
            </Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FC',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  logoContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#E8F0FF',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 30,
  },

  logo: {
    fontSize: 42,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    color: '#222',
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 45,
    lineHeight: 22,
  },

  inputContainer: {
    marginBottom: 30,
  },

  label: {
    fontSize: 15,
    color: '#555',
    marginBottom: 10,
  },

  input: {
    height: 56,
    backgroundColor: '#FFF',
    borderRadius: 14,
    paddingHorizontal: 18,
    fontSize: 17,
    borderWidth: 1,
    borderColor: '#E4E6EB',
  },

  button: {
    height: 56,
    backgroundColor: '#2563EB',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonDisabled: {
    backgroundColor: '#A9C4FF',
  },

  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: '600',
  },
});
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import { getGreeting } from '../../../utils/utils';

const HomeScreen = () => {
  const [message, setMessage] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F6F8FC"
      />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.menu}>☰</Text>
        </TouchableOpacity>

        <Text style={styles.logo}>
          {'Office'}
          <Text style={styles.logoBlue}>{'IQ'}</Text>
        </Text>

        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.icon}>
            <Text>🔔</Text>
          </TouchableOpacity>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>G</Text>
          </View>
        </View>
      </View>

      {/* Welcome */}
      <View style={styles.content}>
        <View style={{ flex: 1 }}>
          <Text style={styles.goodMorning}>
            {`${getGreeting()}, `}
            <Text style={styles.name}>
              Gautam 👋
            </Text>
          </Text>



          <Text style={styles.subtitle}>
            Your AI assistant for work.
          </Text>

          <Text style={styles.subtitle}>
            How can I help you today?
          </Text>
        </View>

        {/* AI Orb */}
        <LinearGradient
          colors={[
            '#4F46E5',
            '#2563EB',
            '#06B6D4',
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.aiCircle}>
          <View style={styles.eye} />
          <View style={styles.eye} />
        </LinearGradient>
      </View>

      <View style={{ flex: 1 }} />

      {/* Chat Input */}
      <View style={styles.chatContainer}>
        <TouchableOpacity>
          <Text style={styles.sparkle}>✦</Text>
        </TouchableOpacity>

        <TextInput
          placeholder="Ask anything..."
          placeholderTextColor="#9CA3AF"
          value={message}
          onChangeText={setMessage}
          style={styles.input}
        />

        {/* <TouchableOpacity>
          <Text style={styles.mic}>🎤</Text>
        </TouchableOpacity> */}

        <TouchableOpacity>
          <LinearGradient
            colors={[
              '#4F46E5',
              '#2563EB',
              '#06B6D4',
            ]}
            style={styles.sendButton}>
            <Text style={styles.send}>
              ↑
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>
        OfficeIQ can make mistakes. Please verify important information.
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FC',
    paddingHorizontal: 24,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  menu: {
    fontSize: 28,
  },

  logo: {
    fontSize: 34,
    fontWeight: '700',
    color: '#1F2937',
  },

  logoBlue: {
    color: '#22AFFF',
  },

  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    marginRight: 15,
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#DCEEFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    fontWeight: '700',
    color: '#2563EB',
  },

  content: {
    flexDirection: 'row',
    marginTop: 60,
    alignItems: 'center',
  },

  goodMorning: {
    fontSize: 20,
    color: '#374151',
  },

  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    marginVertical: 10,
  },

  subtitle: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 18,
  },

  aiCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  eye: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
    marginHorizontal: 10,
  },

  chatContainer: {
    height: 70,
    borderRadius: 35,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 6,
    },

    elevation: 6,
    marginBottom: 15,
  },

  sparkle: {
    fontSize: 24,
    color: '#4F46E5',
  },

  input: {
    flex: 1,
    fontSize: 18,
    marginHorizontal: 15,
  },

  mic: {
    fontSize: 24,
    marginRight: 12,
  },

  sendButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  send: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '700',
  },

  footer: {
    textAlign: 'center',
    color: '#6B7280',
    marginBottom: 25,
    fontSize: 13,
  },
});
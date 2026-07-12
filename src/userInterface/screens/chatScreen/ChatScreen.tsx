import React, { useState, useRef } from 'react';
import {
  StyleSheet, View, FlatList,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import ChatInput from '../../components/chat/ChatInput';
import MessageBubble from '../../components/message/MessageBubble';
import IQResponseCardContainer from '../../components/message/IQResponseCardContainer';
import { getAIResponse } from '../../../ai/AIService';
import { buildPromptWithContext } from '../../../ai/PromptHandler';
import { getGreeting } from '../../../utils/utils';

const MAX_INPUT_HEIGHT = 140;

export default function ChatScreen({ navigation, route }: any) {
  const [messages, setMessages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const flatListRef = useRef<FlatList>(null);
  const userName = route?.params?.userName ?? 'Guest';

  const handleSend = async (userMessage: string) => {
    setIsLoading(true);

    try {
      const answer = await getAIResponse(userMessage);
      console.log("AI Response:", JSON.stringify(answer));

      // Try to parse structured response (with blocks) from API
      let responseObj: any = null;
      try {
        const parsed = typeof answer === 'string' ? JSON.parse(answer) : answer;
        if (parsed && parsed.blocks) responseObj = parsed;
      } catch (e) {
        // not JSON — keep as plain text
      }

      setMessages(previous => [
        ...previous,
        {
          id: Date.now().toString() + '-assistant',
          sender: 'assistant',
          text: responseObj?.text ?? answer,
          response: responseObj ?? undefined,
        },
      ]);
    }
    catch (error) {
      console.error("Error getting AI response:", error);
      setMessages(previous => [
        ...previous,
        {
          id: Date.now().toString() + '-assistant-error',
          sender: 'assistant',
          text: 'Sorry, something went wrong while fetching the response.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text,
    };

    setMessages(prev => [...prev, userMessage]);

    const promptWithContext = buildPromptWithContext(text);
    console.log("User Message:", promptWithContext);
    handleSend(promptWithContext);

    requestAnimationFrame(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    });


  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBackdrop} />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == 'ios' ? 'padding' : undefined}>

        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>{'←'}</Text>
          </TouchableOpacity>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>{getGreeting()}, {userName}</Text>
            <Text style={styles.headerSubtitle}>Welcome back</Text>
          </View>
        </View>

        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            item.sender === 'assistant' ? (
              item.response ? (
                <View style={{ alignItems: 'flex-start', paddingHorizontal: 8 }}>
                  <IQResponseCardContainer response={item.response} />
                </View>
              ) : (
                <MessageBubble item={item} />
              )
            ) : (
              <MessageBubble item={item} />
            )
          )}
          ListFooterComponent={isLoading ? (
            <View style={styles.loaderContainer}>
              <ActivityIndicator size="small" color="#fff" style={{ marginRight: 8 }} />
              <View style={styles.loaderBubble}>
                <Text style={styles.loaderText}>Thinking...</Text>
              </View>
            </View>
          ) : null}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingTop: 20,
            paddingBottom: 220,
          }}
          ListFooterComponentStyle={styles.loaderFooter}
        />

        <ChatInput
          maxHeight={MAX_INPUT_HEIGHT}
          onSend={sendMessage}
        />

      </KeyboardAvoidingView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    // paddingHorizontal: 24,
  },
  headerBackdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 120,
    backgroundColor: 'rgba(255,255,255,0.08)',
    transform: [{ translateY: -20 }],
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.08)',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 5,
    zIndex: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingBottom: 16,
    zIndex: 1,
    backgroundColor: 'transparent',
  },
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  headerTitleContainer: {
    flex: 1,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  headerSubtitle: {
    color: 'rgba(255,255,255,0.72)',
    marginTop: 4,
    fontSize: 14,
  },
  loaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
  },
  loaderBubble: {
    backgroundColor: '#1f1f1f',
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  loaderText: {
    color: '#fff',
    fontSize: 14,
  },
  loaderFooter: {
    paddingBottom: 12,
  },
});
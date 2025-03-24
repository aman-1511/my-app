import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import theme from '../styles/theme';

// Initial welcome message from the health assistant
const INITIAL_MESSAGES = [
  {
    id: '1',
    text: "Hello! I'm your health assistant. How can I help you today?",
    isUser: false,
    timestamp: new Date().toISOString(),
  },
];

// Mock function for AI API
const getAIResponse = async (message) => {
  // Simulate API response delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simple response logic based on keywords
  if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
    return "Hello! How are you feeling today?";
  } else if (message.toLowerCase().includes('headache')) {
    return "I'm sorry to hear you have a headache. Common causes include dehydration, stress, lack of sleep, or eye strain. Try drinking water, resting in a dark room, and taking a break from screens. If it persists, you may want to consult a doctor.";
  } else if (message.toLowerCase().includes('exercise') || message.toLowerCase().includes('workout')) {
    return "Regular exercise is great for your health! Aim for at least 150 minutes of moderate activity or 75 minutes of vigorous activity each week. What type of exercise do you enjoy?";
  } else if (message.toLowerCase().includes('diet') || message.toLowerCase().includes('food') || message.toLowerCase().includes('eat')) {
    return "A balanced diet should include fruits, vegetables, whole grains, lean proteins, and healthy fats. Try to limit processed foods, added sugars, and excessive salt. Would you like specific nutrition advice?";
  } else {
    return "That's an interesting question about your health. To give you the best advice, could you provide more details about your concern?";
  }
};

const ChatBubble = ({ message }) => (
  <View style={[
    styles.bubbleContainer,
    message.isUser ? styles.userBubbleContainer : styles.botBubbleContainer
  ]}>
    {!message.isUser && (
      <View style={styles.avatarContainer}>
        <View style={[styles.avatar, { backgroundColor: theme.colors.primary }]}>
          <Text style={styles.avatarText}>AI</Text>
        </View>
      </View>
    )}
    
    <View style={[
      styles.bubble,
      message.isUser 
        ? [styles.userBubble, { backgroundColor: theme.colors.primary + '33' }] 
        : [styles.botBubble, { backgroundColor: 'white' }]
    ]}>
      <Text style={[
        styles.messageText, 
        { color: theme.colors.text }
      ]}>
        {message.text}
      </Text>
      <Text style={[
        styles.timestamp,
        { color: theme.colors.textLight }
      ]}>
        {new Date(message.timestamp).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        })}
      </Text>
    </View>
  </View>
);

export default function ChatScreen() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const flatListRef = useRef(null);

  // Function to handle sending a message
  const handleSend = async () => {
    if (inputText.trim() === '' || isLoading) return;
    
    // Create user message
    const userMessage = {
      id: Date.now().toString(),
      text: inputText.trim(),
      isUser: true,
      timestamp: new Date().toISOString(),
    };
    
    // Add user message to chat
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputText('');
    setIsLoading(true);
    
    try {
      // Get response from AI
      const response = await getAIResponse(inputText);
      
      // Create AI message with response
      const aiMessage = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date().toISOString(),
      };
      
      // Add AI message to chat
      setMessages(prevMessages => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('Error in AI response:', error);
      
      // Add error message
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I couldn't process your request. Please try again.",
        isUser: false,
        timestamp: new Date().toISOString(),
      };
      
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Clear the chat history
  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
  };

  // Scroll to bottom when new messages are added
  useEffect(() => {
    if (flatListRef.current && messages.length > 0) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Health Assistant</Text>
        <TouchableOpacity 
          style={styles.resetButton} 
          onPress={handleReset}
        >
          <Text style={styles.resetButtonText}>New Chat</Text>
        </TouchableOpacity>
      </View>
      
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ChatBubble message={item} />
          )}
          contentContainerStyle={styles.messagesContainer}
          onLayout={() => flatListRef.current?.scrollToEnd()}
        />
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Type your health question..."
            placeholderTextColor={theme.colors.textLight}
            returnKeyType="send"
            multiline
            maxHeight={100}
            onSubmitEditing={handleSend}
            editable={!isLoading}
          />
          
          <TouchableOpacity
            style={[
              styles.sendButton,
              { backgroundColor: theme.colors.primary },
              (!inputText.trim() || isLoading) && styles.sendButtonDisabled
            ]}
            onPress={handleSend}
            disabled={!inputText.trim() || isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#fff" size="small" />
            ) : (
              <Ionicons name="send" size={18} color="white" />
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: theme.colors.primary,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  resetButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  container: {
    flex: 1,
  },
  messagesContainer: {
    padding: 16,
    paddingBottom: 24,
  },
  bubbleContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    maxWidth: '80%',
  },
  userBubbleContainer: {
    alignSelf: 'flex-end',
    marginLeft: 'auto',
  },
  botBubbleContainer: {
    alignSelf: 'flex-start',
    marginRight: 'auto',
  },
  avatarContainer: {
    marginRight: 8,
    alignSelf: 'flex-end',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  bubble: {
    padding: 12,
    borderRadius: 18,
    maxWidth: '100%',
  },
  userBubble: {
    borderBottomRightRadius: 4,
  },
  botBubble: {
    borderBottomLeftRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  timestamp: {
    fontSize: 10,
    marginTop: 4,
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#f5f5f5',
    marginRight: 8,
    color: theme.colors.text,
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
}); 
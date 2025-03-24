import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

import {
  ChatHeader,
  MessageList,
  ThinkingIndicator,
  ChatInput,
  sendMessageToAPI,
  Message
} from "@/components/Chat";

const ChatScreen = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Helloo! , How can I assist you today?",
      sender: "bot",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: "user",
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputText("");
    
    setIsThinking(true);

    try {
      
      const botReply = await sendMessageToAPI(inputText);
      
     
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now().toString(), text: botReply, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { 
          id: Date.now().toString(), 
          text: "Sorry, I encountered an error. Please try again.", 
          sender: "bot" 
        },
      ]);
    } finally {
      
      setIsThinking(false);
    }
  };

  
  const botAvatar = require("../../assets/images/bot.png");

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ChatHeader 
          title="Healthcare Assistance" 
          imageSource={botAvatar} 
        />
        
        <MessageList 
          messages={messages} 
          botAvatar={botAvatar} 
        />
        
        <ThinkingIndicator 
          visible={isThinking} 
          botAvatar={botAvatar} 
        />
        
        <ChatInput 
          value={inputText}
          onChangeText={setInputText}
          onSend={handleSendMessage}
          disabled={isThinking}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: "#FFFFFF", 
    paddingTop: 30 
  },
  container: { 
    flex: 1, 
    backgroundColor: "#FFFFFF" 
  },
});

export default ChatScreen;

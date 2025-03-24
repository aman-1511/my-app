import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ChatInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSend: () => void;
  disabled?: boolean;
  placeholder?: string;
}

const ChatInput: React.FC<ChatInputProps> = ({
  value,
  onChangeText,
  onSend,
  disabled = false,
  placeholder = "Type something..."
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity 
        style={[styles.sendButton, disabled && styles.disabledButton]} 
        onPress={onSend}
        disabled={disabled}
      >
        <Text style={styles.sendButtonText}>➤</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 60,
    left: 10,
    right: 10,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 20,
    marginRight: 10,
  },
  sendButton: { 
    backgroundColor: "#4F8EF7", 
    padding: 10, 
    borderRadius: 10 
  },
  sendButtonText: { 
    color: "#fff", 
    fontSize: 18 
  },
  disabledButton: { 
    backgroundColor: "#a9c4f5" 
  },
});

export default ChatInput; 
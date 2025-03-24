import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Message } from './types';
import { formatMessage } from './TextFormatter';

interface MessageBubbleProps {
  message: Message;
  botAvatar: any;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, botAvatar }) => {
  const isBot = message.sender === 'bot';

  return (
    <View style={styles.messageContainer}>
      {isBot ? (
        <View style={styles.botMessageWrapper}>
          <Image
            source={botAvatar}
            style={styles.botAvatar}
          />
          <View style={[styles.messageBubble, styles.botMessage]}>
            {formatMessage(message.text)}
          </View>
        </View>
      ) : (
        <View style={[styles.messageBubble, styles.userMessage]}>
          <Text style={styles.messageText}>{message.text}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: { 
    paddingHorizontal: 10, 
    marginVertical: 15 
  },
  botMessageWrapper: { 
    flexDirection: "row", 
    alignItems: "flex-start" 
  },
  botAvatar: { 
    width: 30, 
    height: 30, 
    borderRadius: 15, 
    marginRight: 10 
  },
  messageBubble: { 
    maxWidth: "80%", 
    padding: 14, 
    borderRadius: 10 
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#CDE0FF",
    borderTopRightRadius: 0,
  },
  botMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#EAEAEA",
    borderTopLeftRadius: 0,
  },
  messageText: { 
    color: "#000", 
    fontSize: 16,
    lineHeight: 22,
  },
});

export default MessageBubble; 
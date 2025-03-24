import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Message } from './types';
import MessageBubble from './MessageBubble';

interface MessageListProps {
  messages: Message[];
  botAvatar: any;
}

const MessageList: React.FC<MessageListProps> = ({ messages, botAvatar }) => {
  return (
    <FlatList
      data={messages}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <MessageBubble message={item} botAvatar={botAvatar} />
      )}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: { 
    paddingBottom: 120 
  },
});

export default MessageList; 
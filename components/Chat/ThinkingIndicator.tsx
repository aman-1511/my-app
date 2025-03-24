import React from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';

interface ThinkingIndicatorProps {
  botAvatar: any;
  visible: boolean;
}

const ThinkingIndicator: React.FC<ThinkingIndicatorProps> = ({ botAvatar, visible }) => {
  if (!visible) return null;
  
  return (
    <View style={styles.thinkingContainer}>
      <Image
        source={botAvatar}
        style={styles.botAvatar}
      />
      <View style={[styles.messageBubble, styles.thinkingBubble]}>
        <View style={styles.thinkingContent}>
          <Text style={styles.thinkingText}>Thinking</Text>
          <ActivityIndicator size="small" color="#666" style={styles.thinkingIndicator} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  thinkingContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    marginVertical: 15,
    position: "absolute",
    bottom: 120,
    left: 0,
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
  thinkingBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#EAEAEA",
    borderTopLeftRadius: 0,
    padding: 10,
  },
  thinkingContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  thinkingText: {
    fontSize: 16,
    color: "#666",
    marginRight: 5,
  },
  thinkingIndicator: {
    marginLeft: 5,
  },
});

export default ThinkingIndicator; 
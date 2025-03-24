import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ChatHeaderProps {
  title: string;
  imageSource: any;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ title, imageSource }) => {
  return (
    <View style={styles.header}>
      <Image source={imageSource} style={styles.headerImage} />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#ddd",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  headerImage: { 
    width: 50, 
    height: 50, 
    marginRight: 15 
  },
  headerText: { 
    fontSize: 20, 
    fontWeight: "bold", 
    color: "#333" 
  },
});

export default ChatHeader; 
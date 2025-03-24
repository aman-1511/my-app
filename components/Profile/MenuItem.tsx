import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface MenuItemProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  text: string;
  isLogout?: boolean;
  onPress?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ 
  icon, 
  text, 
  isLogout = false,
  onPress 
}) => {
  return (
    <TouchableOpacity 
      style={[styles.item, isLogout && styles.logout]}
      onPress={onPress}
    >
      <MaterialIcons 
        name={icon} 
        size={20} 
        color={isLogout ? '#d9534f' : '#333'} 
      />
      <Text 
        style={[
          styles.itemText, 
          isLogout && { color: '#d9534f' }
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
    marginLeft: 10,
  },
  logout: {
    borderBottomWidth: 0,
  },
});

export default MenuItem; 
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';


function TabBarImage({ source, focused }: { source: any; focused: boolean }) {
  return (
    <View style={styles.iconContainer}>
      <Image
        source={source}
        style={[styles.icon, focused && { tintColor: '#6C63FF' }]} // Change color when focused
      />
    </View>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#6C63FF', // Active label color
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: () => (
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: '#FFFFFF',
              borderTopWidth: 1,
              borderTopColor: 'rgba(0,0,0,0.05)',
            }}
          />
        ),
        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
          backgroundColor: 'white',
          borderTopColor: 'rgba(0,0,0,0.05)',
          borderTopWidth: 1,
          height: 60,
          paddingBottom: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.05,
          shadowRadius: 4,
        },
        tabBarLabelStyle: {
          fontWeight: '500',
          fontSize: 12,
        },
        tabBarItemStyle: {
          paddingTop: 8,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <TabBarImage source={require('../../assets/icons/home.png')} focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="book"
        options={{
          title: 'Book',
          tabBarIcon: ({ focused }) => (
            <TabBarImage source={require('../../assets/icons/calendar.png')} focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="discover"
        options={{
          title: 'Discover',
          tabBarIcon: ({ focused }) => (
            <TabBarImage source={require('../../assets/icons/stethoscope.png')} focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ focused }) => (
            <TabBarImage source={require('../../assets/icons/chat.png')} focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <TabBarImage source={require('../../assets/icons/user.png')} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
    opacity: 0.6, 
  },
});

import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  ProfileHeader,
  ProfileCard,
  MenuItem,
  MenuSection,
  GENERAL_MENU_ITEMS,
  OTHER_MENU_ITEMS,
  USER_PROFILE
} from '@/components/Profile';

const Profile = () => {

  const handleMenuItemPress = (id: string) => {
    console.log(`Menu item ${id} pressed`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader title="Profile account" />
      
      <ProfileCard
        imageUri={USER_PROFILE.imageUri}
        name={USER_PROFILE.name}
        email={USER_PROFILE.email}
      />

      <MenuSection title="General">
        {GENERAL_MENU_ITEMS.map((item) => (
          <MenuItem
            key={item.id}
            icon={item.icon}
            text={item.text}
            onPress={() => handleMenuItemPress(item.id)}
          />
        ))}
      </MenuSection>

      <MenuSection title="Others">
        {OTHER_MENU_ITEMS.map((item) => (
          <MenuItem
            key={item.id}
            icon={item.icon}
            text={item.text}
            isLogout={item.isLogout}
            onPress={() => handleMenuItemPress(item.id)}
          />
        ))}
      </MenuSection>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
  },
});

export default Profile;

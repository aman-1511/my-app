import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface ProfileCardProps {
  imageUri: string;
  name: string;
  email: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ imageUri, name, email }) => {
  return (
    <View style={styles.profileSectionWrapper}>
      <LinearGradient colors={['#6C63FF', '#dce3ff']} style={styles.gradientBackground}>
        <View style={styles.profileSection}>
          <Image
            source={{ uri: imageUri }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>{name}</Text>
          <Text style={styles.profileEmail}>{email}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  profileSectionWrapper: {
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 15,
  },
  gradientBackground: {
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: 'center',
  },
  profileSection: {
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 14,
    color: '#777',
  },
});

export default ProfileCard; 
import React, { useRef, useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const splashData = [
  {
    image: require('../assets/images/doctor1.png'),
    title: 'More Comfortable Chat With the Doctor',
    description: 'Book an appointment with doctor. Chat with doctor via appointment letter and get consultation.',
  },
  {
    image: require('../assets/images/doctor2.png'),
    title: 'Expert advice & chat at your fingertips',
    description: 'Get access to professional healthcare services at your fingertips.',
  },
  {
    image: require('../assets/images/doctor3.png'),
    title: 'Accurate specialist search made simple',
    description: 'Connect with experienced doctors and receive expert advice instantly.',
  }
];

const extendedData = [
  splashData[splashData.length - 1],
  ...splashData,
  splashData[0],
];

const SplashScreen = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const navigation = useNavigation();
  const router = useRouter(); // Moved inside the component

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        let nextIndex = prevIndex + 1;
        scrollViewRef.current?.scrollTo({ x: nextIndex * width, animated: true });

        if (nextIndex === extendedData.length - 1) {
          setTimeout(() => {
            scrollViewRef.current?.scrollTo({ x: width, animated: false });
            setCurrentIndex(1);
          }, 500);
          return 1;
        }

        return nextIndex;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleGetStarted = () => {
    router.replace('/(tabs)/discover');
  };

  const handleManualScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(newIndex);

    if (newIndex === extendedData.length - 1) {
      setTimeout(() => {
        scrollViewRef.current?.scrollTo({ x: width, animated: false });
        setCurrentIndex(1);
      }, 500);
    }

    if (newIndex === 0) {
      setTimeout(() => {
        scrollViewRef.current?.scrollTo({ x: (extendedData.length - 2) * width, animated: false });
        setCurrentIndex(extendedData.length - 2);
      }, 500);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleManualScroll}
        scrollEventThrottle={16}
        contentOffset={{ x: width, y: 0 }}
      >
        {extendedData.map((item, index) => (
          <View key={index} style={styles.screenContainer}>
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.doctorImage} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <View style={styles.pagination}>
                {splashData.map((_, i) => (
                  <View key={i} style={[styles.dot, currentIndex === i + 1 && styles.activeDot]} />
                ))}
              </View>
              <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
                <Text style={styles.buttonText}>Get Started</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#6C63FF' },
  screenContainer: { width, flex: 1, justifyContent: 'center', alignItems: 'center' },
  imageContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 80 },
  doctorImage: { width: 400, height: 400, resizeMode: 'contain' },
  textContainer: { flex: 1, backgroundColor: '#fff', width: '100%', borderTopLeftRadius: 30, borderTopRightRadius: 30, alignItems: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginTop: 20 },
  description: { fontSize: 16, color: 'gray', textAlign: 'center', marginVertical: 12, paddingHorizontal: 20 },
  pagination: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#D3D3D3', marginHorizontal: 4 },
  activeDot: { width: 10, height: 10, backgroundColor: '#6C63FF' },
  button: { backgroundColor: '#6C63FF', paddingVertical: 12, paddingHorizontal: 100, borderRadius: 10, marginTop: 20 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default SplashScreen;

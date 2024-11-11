// HomeScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <ImageBackground source={require('./assets/icon.png')} style={styles.backgroundImage}>
      <Text style={styles.welcomeText}>WELCOME TO CHRISTOFFEL’S KITCHEN</Text>
      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('CourseSelection')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  welcomeText: { fontSize: 24, color: 'black', marginBottom: 20 },
  nextButton: { backgroundColor: '#007AFF', padding: 10, borderRadius: 5 },
  buttonText: { color: 'white', fontSize: 18 },
});

export default HomeScreen;
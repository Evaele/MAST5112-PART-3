// CourseSelectionScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CourseSelectionScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const handleCourseSelect = (course: string) => {
    navigation.navigate('MenuPage', { selectedCourse: course });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Select a Course</Text>
      {['Starters', 'Main Course', 'Dessert'].map(course => (
        <TouchableOpacity key={course} style={styles.courseButton} onPress={() => handleCourseSelect(course)}>
          <Text style={styles.courseText}>{course}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  headerText: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  courseButton: { backgroundColor: '#FF6347', padding: 10, marginVertical: 10, borderRadius: 5 },
  courseText: { color: 'white', fontSize: 18 },
});

export default CourseSelectionScreen;
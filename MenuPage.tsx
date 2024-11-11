// MenuPage.tsx
import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { getMenuItems } from './menu items';

const MenuPage: React.FC<{ route: any; navigation: any }> = ({ route, navigation }) => {
  const { selectedCourse } = route.params;
  const menuItems = getMenuItems().filter(item => item.course === selectedCourse);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Menu Items in {selectedCourse}</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.dishItem}
            onPress={() => navigation.navigate('EditMenuItemPage', { item })}
          >
            <Text style={styles.dishText}>{item.name} - ${item.price}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddMenuItemPage', { selectedCourse })}>
        <Text style={styles.buttonText}>Add Dish</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  headerText: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  dishItem: { marginBottom: 10 },
  dishText: { fontSize: 18, color: 'blue' },
  addButton: { backgroundColor: '#007AFF', padding: 10, borderRadius: 5, marginTop: 20 },
  buttonText: { color: 'white', textAlign: 'center' },
});

export default MenuPage;
// AddMenuItemPage.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { addMenuItem, MenuItem } from './menu items';

const AddMenuItemPage: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState<'Starters' | 'Main Course' | 'Dessert'>('Starters');
  const [price, setPrice] = useState('');

  const handleAddItem = () => {
    if (name && description && price) {
      const newItem: MenuItem = {
        id: Date.now(),
        name,
        description,
        course,
        price: parseFloat(price),
      };
      addMenuItem(newItem);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Menu Item</Text>
      <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} style={styles.input} />
      <TextInput placeholder="Price" value={price} onChangeText={setPrice} style={styles.input} keyboardType="numeric" />
      <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
        <Text style={styles.buttonText}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 15, paddingLeft: 8 },
  addButton: { backgroundColor: '#007AFF', padding: 10, borderRadius: 5 },
  buttonText: { color: 'white', textAlign: 'center' },
});

// AddMenuItemPage.tsx
// (Code remains largely the same as previously shared, with navigation.goBack() after adding the item.)
export default AddMenuItemPage;

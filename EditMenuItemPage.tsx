// EditMenuPage.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { editMenuItem, deleteMenuItem, MenuItem } from './menu items';

const EditMenuItemPage: React.FC<{ route: any; navigation: any }> = ({ route, navigation }) => {
  const { item } = route.params;
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [price, setPrice] = useState(item.price.toString());

  const handleSave = () => {
    editMenuItem({ ...item, name, description, price: parseFloat(price) });
    navigation.goBack();
  };

  const handleDelete = () => {
    deleteMenuItem(item.id);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Menu Item</Text>
      <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} style={styles.input} />
      <TextInput placeholder="Price" value={price} onChangeText={setPrice} style={styles.input} keyboardType="numeric" />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.buttonText}>Delete Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 15, paddingLeft: 8 },
  saveButton: { backgroundColor: '#007AFF', padding: 10, borderRadius: 5 },
  deleteButton: { backgroundColor: '#FF4500', padding: 10, borderRadius: 5, marginTop: 10 },
  buttonText: { color: 'white', textAlign: 'center' },
});
// EditMenuItemPage.tsx
// (Code remains largely the same as previously shared, with navigation.goBack() after saving or deleting the item.)
export default EditMenuItemPage;
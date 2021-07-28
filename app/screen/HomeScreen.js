import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.title} >Welcome, Andre</Text>
        <TextInput 
            style={styles.input}
            placeholder='New Skill'
            placeholderTextColor='#666'
        />
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.4}
        >
            <Text style={styles.buttonText} >Add</Text>
        </TouchableOpacity>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
  },
  input: {
      backgroundColor: '#1f1e25',
      color: '#fff',
      fontSize: 18,
      padding: 12,
      marginTop: 32,
      borderRadius: 8,
  },
  button: {
      backgroundColor: '#a370f7',
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 16
  },
  buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
  }
});

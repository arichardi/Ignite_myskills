import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {

    const [newSkill, setNewSkill] = useState('')
    const [myskills, setMySkills] = useState([])

    function handleAddNewSkill(){
        setMySkills([...myskills, newSkill])
        console.log(myskills)
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title} >Welcome, Andre</Text>
        <TextInput 
            style={styles.input}
            placeholder='New Skill'
            placeholderTextColor='#666'
            onChangeText={setNewSkill}
        />
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.4}
            onPress={handleAddNewSkill}
        >
            <Text style={styles.buttonText} >Add</Text>
        </TouchableOpacity>

        <Text style={[styles.title, { marginVertical: 16,}]} >Skills</Text>
        
        {   myskills.map( skill => (
            <TouchableOpacity key={skill} style={styles.skillsButton} >
        <Text style={styles.skillsText}>
            {skill}
        </Text>
        </TouchableOpacity>
        ))}
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
  },
  skillsButton: {
      alignItems: 'center',
      backgroundColor: '#1f1e25',
      borderRadius: 16,
      marginVertical: 8,
  },
  skillsText: {
    color: '#ddd',
    padding: 16,
    fontSize: 16,
    fontWeight: '600',
    
  },
});

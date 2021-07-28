import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AppButton from '../components/AppButton';
import SkillCard from '../components/skillCard';

export default function HomeScreen() {

    const [newSkill, setNewSkill] = useState('')
    const [myskills, setMySkills] = useState([])

    function handleAddNewSkill(){
        setMySkills([...myskills, newSkill])
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

        <AppButton 
            onPress={handleAddNewSkill}
        />

        <Text style={[styles.title, { marginVertical: 16,}]} >Skills</Text>
        
        {myskills.map( skill => <SkillCard key={skill} skill={skill}/> )}
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

});

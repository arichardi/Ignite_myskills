import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput,  View, StatusBar } from 'react-native';
import AppButton from '../components/AppButton';
import SkillCard from '../components/SkillCard';

    interface SkillData {
      id: string;
      name: string;
    }


export default function HomeScreen() {

    const [newSkill, setNewSkill] = useState('')
    const [myskills, setMySkills] = useState<SkillData[]>([])

    function handleAddNewSkill(){
      const data ={
        id: String(new Date().getTime()),
        name: newSkill
      }

        setMySkills([...myskills, data])
    }

    function handleRemoveSkill(skill){
      const newList = myskills.filter( (item) => item.id != skill)
      setMySkills(newList)
    }

  return (
    <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <Text style={styles.title} >Welcome, Andre</Text>
        <TextInput 
            style={styles.input}
            placeholder='New Skill'
            placeholderTextColor='#666'
            onChangeText={setNewSkill}
        />

        <AppButton 
            onPress={handleAddNewSkill}
            title='Add'
        />

        <Text style={[styles.title, { marginVertical: 16,}]} >Skills</Text>
        
        <FlatList 
            data={myskills}
            keyExtractor={ item => item.id}
            renderItem={ ({item}) => 
            <SkillCard 
            skill={item.name}
            onPress={ () => handleRemoveSkill(item.id)}
            />
        }
        />
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

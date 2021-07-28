import React from 'react'
import { StyleSheet, Text, TouchableOpacity, } from 'react-native'

const SkillCard = ({skill}) => {
    return (
        <TouchableOpacity style={styles.skillsButton} >
        <Text style={styles.skillsText}>
            {skill}
        </Text>
        </TouchableOpacity>
    )
}

export default SkillCard

const styles = StyleSheet.create({
    
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
})

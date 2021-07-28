import React from 'react'
import { StyleSheet, Text, TouchableOpacity, } from 'react-native'

const AppButton = ({onPress}) => {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.4}
            onPress={onPress}
        >
            <Text style={styles.buttonText} >Add</Text>
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
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
})

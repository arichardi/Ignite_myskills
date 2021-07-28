import React from 'react'
import { StyleSheet, Text, TouchableOpacity,TouchableOpacityProps } from 'react-native'

interface AppButtonProps extends TouchableOpacityProps {
    title: string,
}
const AppButton = ({title, ...rest}: AppButtonProps) => {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.4}
            {...rest}
        >
            <Text style={styles.buttonText} >{title}</Text>
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

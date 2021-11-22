import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.txtHeader}>Makan apa hari ini?</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:'10%',
        alignItems:'center',
        justifyContent:'center'
    },
    txtHeader:{
        fontSize:26,
        fontWeight:'600'
    }
})

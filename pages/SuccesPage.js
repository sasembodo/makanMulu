import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import COLORS from '../data/COLORS'

export default function SuccesPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Terimakasih sudah menggunakan layanan kami, pesanan anda akan tiba sesaat lagi</Text>
            <View style={styles.icon}>
                <MaterialIcons name='done' size={40}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center', 
        alignItems: 'center' ,
        paddingHorizontal:'6%'
    },
    icon:{
        backgroundColor:COLORS.yellow,
        height:50,
        width:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:25
    },
    txt:{
        fontSize:20,
        textAlign:'center',
        paddingBottom:20
    }
})

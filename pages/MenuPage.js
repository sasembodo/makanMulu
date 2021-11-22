import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Header from '../components/header'
import MenuList from '../components/menuList'

export default function MenuPage({navigation}) {
    return (
        <View>
            <Header/>
            <MenuList/>
        </View>
    )
}

const styles = StyleSheet.create({})

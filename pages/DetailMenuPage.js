import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import {ADD_TO_CART} from '../redux/cartItem'
import Menu from '../data/menu'
import COLORS from '../data/COLORS'

const deviceWidth = Dimensions.get('screen').width

export default function DetailMenuPage({route}) {
    const [currentMenu, setCurrentMenu] = useState({})
    const [qty, setQty] = useState(0)

    const { id } = route.params;

    const dispatch = useDispatch()
    const addItemToCart = item => {
        dispatch({ type: ADD_TO_CART, payload: item })
    }

    useEffect(() => {
        Menu.filter(menus=> {
            if(menus.id == id){
                setCurrentMenu(menus)
            }
        })
    }, [])

    if(currentMenu == {}){
        return (
            <View>
                <Text>loading</Text>
            </View>
        )    
    }

    return (
        <View style={styles.container}>
            <Image
                source={currentMenu.photo}
                resizeMode='contain'
                style={{width:deviceWidth,height:deviceWidth, borderRadius:0}}
            />
            <Text style={styles.txtTitle}>{currentMenu.foodName}</Text>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.btn} onPress={() => addItemToCart(currentMenu)}>
                    <Text>Tambah +</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.txtDesc}>{currentMenu.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    buttons:{
        flexDirection:'row',
        marginVertical:10
    },
    btn:{
        backgroundColor:COLORS.yellow,
        alignItems:'center',
        justifyContent:'center',
        width:80,
        height:30,
        borderRadius:150
    },
    qtyDisplay:{
        alignItems:'center',
        justifyContent:'center',
        width:30,
        height:30,
        borderRadius:150
    },
    txtTitle:{
        paddingTop:10,
        fontSize:24,
        fontWeight:'600'
    },
    txtDesc:{
        textAlign:'justify',
        paddingHorizontal:'5%'
    }
})

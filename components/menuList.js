import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {ADD_TO_CART} from '../redux/cartItem'
import { useDispatch } from 'react-redux'
import Menu from '../data/menu'
import COLORS from '../data/COLORS';

export default function MenuList() {
    const navigation = useNavigation();
    const [qty, setQty] = useState(0)

    const dispatch = useDispatch()
    const addItemToCart = item => {
        dispatch({ type: ADD_TO_CART, payload: item })
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={Menu}
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                renderItem={({item, index})=>
                    <View style={styles.card}>
                        <TouchableOpacity onPress={()=> {
                            navigation.navigate('DetailMenu', {"id": item.id})
                        }}>
                            <Image
                                source={item.photo}
                                resizeMode='contain'
                                style={{height:120, width:120, borderRadius:20}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> {
                            navigation.navigate('DetailMenu', {"id": item.id})
                            }}
                            style={styles.title}
                        >
                            <Text style={styles.txtPrice}>Rp {item.price},-</Text>
                            <Text style={styles.txtTitle}>{item.foodName}</Text>
                        </TouchableOpacity>
                        <View style={styles.buttons}>
                            <TouchableOpacity style={styles.btn} onPress={() => addItemToCart(item)}>
                                <Text>Tambah +</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        height:'90%',
        marginHorizontal:5
    },
    card:{
        backgroundColor:'#ececec',
        width:'47%',
        alignItems:'center',
        paddingVertical:10,
        margin:5,
        borderRadius:10,
        elevation:10,
        shadowColor:'#000'
    },
    buttons:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    btn:{
        marginTop:10,
        backgroundColor:COLORS.yellow,
        alignItems:'center',
        justifyContent:'center',
        width:80,
        height:20,
        borderRadius:150
    },
    title:{
        paddingTop:10,
        alignItems:'center',
        justifyContent:'center'
    },
    qtyDisplay:{
        alignItems:'center',
        justifyContent:'center',
        width:30,
        height:30,
        borderRadius:150
    },
    txtTitle:{
        fontSize:16,
        fontWeight:'700'
    },
    txtPrice:{
        fontWeight:'600'
    }
})

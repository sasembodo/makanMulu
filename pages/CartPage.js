import React, {useEffect, useState} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { REMOVE_FROM_CART } from '../redux/cartItem'
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import Menu from '../data/menu'
import COLORS from '../data/COLORS';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export default function CartPage () {
  const navigation = useNavigation();
  const cartItems = useSelector(state => state)
  const dispatch = useDispatch()
  const [total, setTotal] = useState(0)
  const [foodCount, setFoodCount] = useState(0)

  const removeItemFromCart = item =>{
    dispatch({
        type: REMOVE_FROM_CART,
        payload: item
    })
    
    if(foodCount == 1){
        setTotal(0)
    }else{
        createTotal(cartItems)
    }
      
  } 

  const createTotal = data =>{
    let totalFood = 0
    let countItemFood = 0
    if(data.length){
        data.map(x=>{
            totalFood += x.count * x.price
            countItemFood += x.count
        })
    }
    setTotal(totalFood)
    setFoodCount(countItemFood)
  }

  useEffect(() => {
    createTotal(cartItems)
  }, [])

  return (
    <View style={styles.container}>
            <FlatList
                data={cartItems}
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
                        <TouchableOpacity style={styles.title} onPress={()=> {
                            navigation.navigate('DetailMenu', {"id": item.id})
                            }}>
                            <Text style={styles.txtTitle}>{item.foodName}</Text>
                            <Text style={styles.txtPrice}>Rp {item.price},-</Text>
                        </TouchableOpacity>
                        <View style={styles.buttons}>
                            <TouchableOpacity style={styles.btn} onPress={() => removeItemFromCart(item)}>
                                <Text>Hapus -</Text>
                            </TouchableOpacity>
                            <View style={styles.qtyDisplay}>
                                <Text style={styles.txtQty}>{item.count}</Text>
                            </View>
                        </View>
                    </View>
                }
                keyExtractor={item => item.id}
            />
            <View style={styles.orderView}>
                <Text style={styles.txtTotal}>Grand Total = Rp {total},-</Text>
                <TouchableOpacity style={styles.orderButton} onPress={()=> {
                    navigation.navigate('OrderDetail')
                }}>
                    <Text style={styles.txtCheckout}>Checkout</Text>
                </TouchableOpacity>
            </View>
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
        width:windowWidth*0.45,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10,
        margin:7,
        borderRadius:10,
        elevation:7,
        shadowColor:'#000'
    },
    title:{
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:5
    },
    buttons:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    btn:{
        backgroundColor:COLORS.yellow,
        alignItems:'center',
        justifyContent:'center',
        width:80,
        height:20,
        borderRadius:150
    },
    qtyDisplay:{
        alignItems:'center',
        justifyContent:'center',
        width:30,
        height:30,
        borderRadius:150
    },
    orderView:{
        width: windowWidth,  
        height: 60,             
        backgroundColor: COLORS.yellow,                                    
        position: 'absolute',                                          
        bottom: -60,
        color: '#000',
        paddingVertical: 7,
        paddingHorizontal:15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    orderButton:{
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:20,
        height:30,
        borderRadius:5,
        margin:7,
        elevation:6,
        shadowColor:'#000'
    },
    txtTitle:{
        fontSize:16,
        fontWeight:'700'
    },
    txtPrice:{
        fontWeight:'600'
    },
    txtQty:{
        fontWeight:'600'
    },
    txtCheckout:{
        fontWeight: 'bold'
    },
    txtTotal:{
        fontSize:16,
        fontWeight:'bold',
        paddingTop:10
    }
})

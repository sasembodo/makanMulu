import React, {useEffect, useState} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet
} from 'react-native'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import COLORS from '../data/COLORS';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function OrderDetailPage() {
    const navigation = useNavigation();
    const cartItems = useSelector(state => state)
    const [total, setTotal] = useState(0)
    const [foodCount, setFoodCount] = useState(0)

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

    const billList = cartItems.map((data) => {
        return (
            <View style={styles.billList}>
                <Text>{data.foodName} x {data.count}</Text>
                <Text>Rp{data.price*data.count}</Text>
            </View>
        )
    })

    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <Text style={styles.txtTitle}>Informasi Pesanan</Text>
                {billList}
                <View style={[styles.billList,{paddingTop:10}]}>
                    <Text style={styles.total}>Grand Total</Text>
                    <Text style={styles.total}>Rp{total}</Text>
                </View>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity 
                    style={[styles.btn,{backgroundColor:COLORS.white}]}
                    onPress={()=>navigation.navigate('Menu')}
                >
                    <Text style={styles.txtBtn}>Batal</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.btn,{backgroundColor:COLORS.yellow}]}
                    onPress={()=>navigation.navigate('Succes')}
                >
                    <Text style={styles.txtBtn}>Bayar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        height:'100%'
    },
    list:{
        backgroundColor:COLORS.white,
        margin:10,
        padding:'6%',
        borderRadius:20,
        height:'85%',
        elevation:5,
        shadowColor:'#000'
    },
    billList:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    total:{
        fontWeight: 'bold'
    },
    buttons:{
        height:'10%',
        flexDirection:'row',
        paddingHorizontal:'1%',
        alignItems:'center',
        justifyContent:'space-between'
    },
    btn:{
        width:'45%',
        paddingVertical:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        margin:10,
        elevation:5,
        shadowColor:'#000'
    },
    txtTitle:{
        fontSize:20,
        fontWeight:'800',
        textAlign:'center',
        paddingVertical:20
    },
    txtBtn:{
        fontSize:16,
        fontWeight:'bold'
    }
})

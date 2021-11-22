import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet  } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

function ShoppingCartIcon(props) {
  const navigation = useNavigation()
  const cartItemsLength = useSelector(state =>{
      let countItem = 0
      state.map(x=>{
        countItem += x.count
      })
      return countItem
  })

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Cart')}
      style={{ marginRight: 10 }}>
      <MaterialIcons name='shopping-cart' size={30} style={styles.icon} />
      <View style={styles.itemCountContainer}>
        <Text style={styles.itemCountText}>{cartItemsLength}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        marginRight: 10
    },
    itemCountContainer: {
        position: 'absolute',
        height: 20,
        width: 20,
        borderRadius: 15,
        backgroundColor: '#FF7D7D',
        right: 10,
        bottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000
    },
    itemCountText: {
        color: 'white',
        fontWeight: 'bold'
    },
    icon:{
      marginRight:20
    }
})

export default ShoppingCartIcon
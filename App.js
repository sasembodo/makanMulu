import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as StoreProvider } from 'react-redux'
import store from './redux/store'

import MenuPage from './pages/MenuPage'
import DetailMenuPage from './pages/DetailMenuPage'
import CartPage from './pages/CartPage'
import OrderDetailPage from './pages/OrderDetailPage'
import SuccesPage from './pages/SuccesPage'

import ShoppingCartIcon from './components/shoppingCartIcon'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen name="Menu" component={MenuPage} 
            options={{ headerRight: props => <ShoppingCartIcon {...props} /> }}
          />
          <Stack.Screen name="DetailMenu" component={DetailMenuPage}  
            options={{ headerRight: props => <ShoppingCartIcon {...props} /> }}
          />
          <Stack.Screen name='Cart' component={CartPage} />
          <Stack.Screen name="OrderDetail" component={OrderDetailPage} />
          <Stack.Screen name="Succes" component={SuccesPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  )
}

const styles = StyleSheet.create({})

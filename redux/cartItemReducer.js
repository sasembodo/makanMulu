import Menu from '../data/menu'
import {ADD_TO_CART, REMOVE_FROM_CART} from './cartItem'

const initialState = []

const cartItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:{
            let menuInCart = state.find(item => item.id == action.payload.id)  
            if(menuInCart){
                let newMenu = []
                state.map(x=>{
                    if(x.id == action.payload.id){
                        x.count++        
                    }
                    newMenu.push(x)
                })
                return newMenu
            }else{
                let addedMenu = action.payload
                addedMenu.count = 1
                return [...state, addedMenu]
            }
        }
        case REMOVE_FROM_CART:{
            let menuInCart = state.find(item => item.id == action.payload.id)  
            if(menuInCart && menuInCart.count>1){
                let newMenu = []
                state.map(x=>{
                    if(x.id == action.payload.id){
                        x.count--        
                    }
                    newMenu.push(x)
                })
                return newMenu
            }else{
                return state.filter(cartItem => cartItem.id !== action.payload.id)
            }
        }
    }
  return state
}

export default cartItemsReducer
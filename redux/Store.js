import { createStore } from 'redux'
import cartItemsReducer from './CartReducer'

const store = createStore(cartItemsReducer)

export default store
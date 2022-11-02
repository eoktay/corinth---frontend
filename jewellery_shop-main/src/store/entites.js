import {combineReducers} from '@reduxjs/toolkit'
import user from './user'
import products from './product'
export default combineReducers({
    user,
    products
})
import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './userSlice'
// import cartReducer from './cartSlice';
// import groupsReducer from './groupsSlice';

const rootReducer = combineReducers({
    user: userReducer,
    // cart: cartReducer,
    // groups: groupsReducer,
})

export default rootReducer

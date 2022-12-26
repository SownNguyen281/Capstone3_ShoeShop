import {configureStore} from '@reduxjs/toolkit';
import ShopReducer from './reducers/ShopReducer';
import userReducer from './reducers/userReducer';





export const store = configureStore({
    reducer:{
            shopReducer: ShopReducer,
            userReducer: userReducer,
        },
        
    
})


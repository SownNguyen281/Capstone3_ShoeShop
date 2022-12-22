import {configureStore} from '@reduxjs/toolkit';
import ShopReducer from './reducers/ShopReducer';





export const store = configureStore({
    reducer:{
            shopReducer: ShopReducer
        },
        
    
})


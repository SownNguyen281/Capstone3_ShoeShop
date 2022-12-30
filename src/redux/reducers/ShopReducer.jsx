import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { http } from '../../util/config';
const initialState = {
    carts: [
        {
            "id": 1,
            "name": "product 1",
            "image": "https://i.pravatar.cc?u=1",
            "price": 350,
            "quantity": 1, 
          }
    ],
    dataProduct:[
        {
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": 350,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "size": "[36,37,38,39,40,41,42]",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 995,
            "deleted": false,
            "categories": "[{\"id\":\"ADIDAS\",\"category\":\"ADIDAS\"},{\"id\":\"MEN\",\"category\":\"MEN\"},{\"id\":\"WOMEN\",\"category\":\"WOMEN\"}]",
            "relatedProducts": "[2,3,5]",
            "feature": true,
            "image": "https://shop.cyberlearn.vn/images/adidas-prophere.png"
          }
    ],
    productDetail: {

    },
    
}

const ShopReducer = createSlice({
  name: 'shopReducer',
  initialState,
  reducers: {
    getProductApiAction:(state,action) =>{
       state.dataProduct = action.payload
    },
    addToCartAction:(state,action) =>{
        
        const itemCart = state.carts.find(item=>item.id === action.payload.id);
        if(itemCart){
            itemCart.quantity += 1;
        }else{
            state.carts.push(action.payload);
        }
    },
    delItemAction:(state,action) =>{
        const id = action.payload;
        state.carts = state.carts.filter(item => item.id !== id)
    },
    changeItemAction:(state,action) =>{
        const {id,quantity} = action.payload;
        const itemCart = state.carts.find(item => item.id === id);
        if(itemCart){
            itemCart.quantity += quantity;
            if(itemCart.quantity < 1){
                if(window.confirm('Do you want to delete ?')){
                    state.carts = state.carts.filter(item => item.id !== id);
                } else{
                    itemCart.quantity -= quantity;
                }
                
            }
        }
    },
    getByIdProductAction:(state,action) =>{
        const productDetail = action.payload;
            
        state.productDetail = productDetail;
    }
  }
});

export const {getProductApiAction, getByIdProductAction, addToCartAction,delItemAction,changeItemAction} = ShopReducer.actions

export default ShopReducer.reducer

// ----------------action

export const getAllProductApi = () =>{
    return async (dispatch,getState) =>{
        try{
            const result = await axios ({
                url:'https://shop.cyberlearn.vn/api/Product/',
                method:'GET'
                
            });
        //    xu ly dispatch len reducer
            const action =  getProductApiAction(result.data.content);
            dispatch(action);
        } catch(err){
            console.log(err);
        }
    }
}


export const getByIdAllProductApi = (id) => {
    return async dispatch => {
        //Gọi api
        try {
            let result = await http.get('/api/Product/getbyid?id='+id);
            //Sau khi lấy dữ liệu từ api về => dispatch lên reducer
            //Tạo ra action creator đưa dữ liệu lên reducer
            const action = getByIdProductAction(result.data.content);
            dispatch(action);
        } catch (err) {
            console.log(err);
        }
    }
}

// export const getByIdAllProductApi = (id) =>{
//     return async (dispatch,getState) =>{
//         try{
//             const result = await axios ({
//                 url:'https://shop.cyberlearn.vn/api/Product/getbyid?id='+id,
//                 method:'GET'
                
//             });
//         //    xu ly dispatch len reducer
//             const action =  getByIdProductAction(result.data.content);
//             dispatch(action);
//         } catch(err){
//             console.log(err);
//         }
//     }
// }
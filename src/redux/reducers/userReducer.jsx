import {  createSlice } from '@reduxjs/toolkit'
import { history } from '../..';
import {ACCESSTOKEN, http, settings, USER_LOGIN} from '../../util/config'


const initialState = {
    userLogin: settings.getStorageJson(USER_LOGIN) ? settings.getStorageJson(USER_LOGIN) : {},
    userProfile:{

    },
}

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    getLoginAsyncAction:(state,action)=>{
        state.userLogin = action.payload;
        settings.setStorageJson(USER_LOGIN,action.payload);
        settings.setCookieJson(USER_LOGIN,action.payload,30);
        settings.setStorage(ACCESSTOKEN,action.payload.accessToken);
        settings.setCookie(ACCESSTOKEN,action.payload.accessToken,30);
        history.push('/profile');
    },

    getProfileAction: (state, action) => {
        state.userProfile = action.payload;
      }
  }
});

export const {getLoginAsyncAction,getProfileAction} = userReducer.actions

export default userReducer.reducer


export const loginAsyncApi = (id) => {
    return async dispatch => {
        //Gọi api
        try {
            let result = await http.get('/api/Product/getbyid?id='+id);
            //Sau khi lấy dữ liệu từ api về => dispatch lên reducer
            //Tạo ra action creator đưa dữ liệu lên reducer
            const action = getLoginAsyncAction(result.data.content);
            dispatch(action);
        } catch (err) {

        }
    }
}

export const getProfileApi = () => {
    return async dispatch => {
  
      const result = await http.post('/api/users/getprofile');
      const action = getProfileAction(result.data.content);
      dispatch(action);
      
  
    }
  }

export const loginFacebookApi = (tokenFBApp) => {
    return async dispatch => {
      const result = await http.post('/api/Users/facebooklogin', { facebookToken: tokenFBApp });
      //sau khi lấy dữ liệu tạo ra actionCreator = {type:,payload}
      const action = getLoginAsyncAction(result.data.content);
      await dispatch(action);
  
  
      const actionGetProfile = getProfileApi();
      dispatch(actionGetProfile)
  
  
  
      //Lưu vào localstorage và cookie
      settings.setStorageJson(USER_LOGIN, result.data.content);
  
      settings.setStorage(ACCESSTOKEN, result.data.content.accessToken);
  
      settings.setCookie(ACCESSTOKEN, result.data.content.accessToken, 30);
    }
  }



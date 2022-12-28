import React from 'react'
import FacebookLogin from 'react-facebook-login';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginFacebookApi } from '../../redux/reducers/userReducer';

 

 
export default function LoginFacebook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //Gọi api đăng nhập facebook
  const responseFacebook = async (response) => {
    console.log(response);

    const action = loginFacebookApi(response.accessToken);
    await dispatch(action);

    //Chuyển hướng về profile
    navigate('/profile');

  }
  return (
    <div className='facebook'>
      <FacebookLogin
        appId="462980792601826"
        fields="name,email,picture"
        callback={responseFacebook} 
        render={<button>aaa</button>}
        
        />
        
    </div>
  )
}

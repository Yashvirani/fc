import React from 'react';
import './Login.css';
import { auth,provider } from './firebase';
import {actionTypes} from './reducer';
import {useStateValue} from './StateProvider';

function Login() {
  const [state,dispatch] = useStateValue()
  const signIn = () => {
    auth.signInWithPopup(provider)
        .then(response => {
          dispatch({
            type:actionTypes.SET_USER,
            user:response.user
          })
          console.log(response);
        }).catch( err => {
          alert(err.message);
        });
  }
  return (
    <div className='login'>
      <div className="login__logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" />
        <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" />
      </div>
      <button type="submit" onClick={signIn}>Sign In</button>
    </div>
  );
}

export default Login;

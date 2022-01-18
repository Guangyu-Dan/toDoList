//import './App.css';
import GoogleLogin from 'react-google-login';
import React, { useState } from 'react';
import axios from 'axios';
import App from "./App"
import { BrowserRouter as Router, Routes,Link, Route} from "react-router-dom";
import Header from "./Header";
function Login() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );

  const handleFailure = (result) => {
    alert(result);
  };

  const handleLogin = async (googleData) => {
    console.log(googleData)
    axios.post('/google-login', googleData)
    setLoginData(googleData);
    localStorage.setItem('loginData', JSON.stringify(googleData));
  };
  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
  };

  return (
    <div className="App">
        {
          !loginData && <Header email="null"/>
        }

        <div>
          {loginData ? (
            <div>
              <App googleID={loginData.googleId} email={loginData.profileObj.email} handleLogout = {handleLogout}/>
            </div>
          ) : (
            <div class="googleLoginBox">
            <GoogleLogin
              clientId={'591760797884-k503eci4c1eb8gq3293l6t21uckvh9rd.apps.googleusercontent.com'}
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={'single_host_origin'}
            ></GoogleLogin>
            </div>
          )}
        </div>

    </div>
  );
}

export default Login;

import {
    Link
  } from '@chakra-ui/react';
import { useState } from 'react';
import { Link as  RouterLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { LOGIN_SUCCESS } from '../Redux/AuthReducer/actionTypes';
import { login } from '../Redux/AuthReducer/action';
import "./Style/login.css"

  export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loginHandler = () => {
        if(email && password) {
            const params = {
                email,
                password,
            }
            
            dispatch(login(params)).then((res) => {
                if(res === LOGIN_SUCCESS){
                    navigate("/home", {replace: true})
                    console.log(res)
                }
            }).catch((e)=>{
              console.log(e)
            })
        }
    }

    return (
        <div className="signin">
        <div className="signin__left">
          <img src="./images/signin.png" alt="signin" />
        </div>
        <div className="signin__right">
          <div className="signin__fields">
            <h1 className="title">Insta Clone</h1>
  
            <form className="signin__form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="inp_val"
                className="inputFiled"
                placeholder="Phone number, username, or email"
              />
  
              <input
                type="password"
                className="inputFiled"
                placeholder="Password"
                value={password}
                name="pass_val"
                onChange={(e) => setPassword(e.target.value)}
              />
  
              <button
                type="button"
                className="submitBtn"
                onClick={loginHandler}
              >
                Log In
              </button>
            </form>
  
            <div className="division">
              <div></div>
              <p>or</p>
              <div></div>
            </div>
  
     
            <Link to="/reset" className="forgotPass">
              Forgot Password?
            </Link>
          </div>
  
          <div className="signupField">
            Don't have an account? <RouterLink to="/signup">Sign up</RouterLink>
          </div>
  
          <div className="getApp">
            <p>Get the app.</p>
  
            <div className="appsLinks">
              <img
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                alt="AppStore"
                width="130"
                height="40"
              />
              <img
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                alt="GooglePlay"
                width="130"
                height="40"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }


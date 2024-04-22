import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Auth.css'
import Logo from '../../img/logo.png'
import authback from '../../img/authback.png'
import { login } from '../../features/auth/authSlice'
import { Navigate } from 'react-router-dom'
import { path } from '../../paths/paths'
// import { NavLink } from 'react-router-dom'
// import { path } from '../../paths/paths'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <div
      className="Auth"
      style={{
        backgroundImage: `URL(${authback})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>KAMBI KUTTAPAN</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      {isLogin ? <LogIn setIsLogin={setIsLogin} /> : <SignUp />}
    </div>
  )
}
function LogIn({ setIsLogin }) {
  const dispatch = useDispatch()

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  })
  const { user, isLoading, isError, isSuccess, error } = useSelector(
    (state) => state?.auth ||{}
  );

  const loginSubmit = async (e) => {
    e.preventDefault()
    await dispatch(
      login({
        email: loginData?.email,
        password: loginData?.password,
      }),
    )
    console.log(loginData)
  }

  // const {  } = useSelector(
  //   (state) => state?.auth,
  // )

  // useEffect(() => {
  //   if (user) {
  //     Navigate(path.home);
  //   }
  // }, [user, isLoading, isError, isSuccess, error]);

  return (
    <div className="a-right" style={{ color: 'black' }}>
      <form onSubmit={loginSubmit} className="infoForm authForm">
        <h3>Log In</h3>

        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
            id="username"
            onChange={(e) =>
              setLoginData({
                ...loginData,
                username: e.target?.value,
              })
            }
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
            id="password"
            onChange={(e) =>
              setLoginData({
                ...loginData,
                password: e.target?.value,
              })
            }
          />
        </div>

        <div>
          <span style={{ fontSize: '12px' }}>
            Don't have an account ?
            <span
              onClick={(e) => {
                e.preventDefault()
                setIsLogin(false)
              }}
              className="linkText"
            >
              SignUp
            </span>
          </span>
          <button className="button infoButton">Login</button>
        </div>
      </form>
    </div>
  )
}
function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign up</h3>

        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Usernames"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
          <input
            type="text"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
          />
        </div>

        <div>
          <span style={{ fontSize: '12px' }}>
            Don't have an account ?
            <span
              onClick={(e) => {
                e.preventDefault()
                // setIsLogin(false)
              }}
              className="linkText"
            >
              SignUp
            </span>
          </span>
        </div>
        <button className="button infoButton" type="submit">
          SignUp
        </button>
      </form>
    </div>
  )
}

export default Auth

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Auth.css'
import Logo from '../../img/logo.png'
import authback from '../../img/authback.png'
// import { login } from '../../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import { path } from '../../paths/paths'
import { logIn } from '../../actions/auth.actions'
// import { toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
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
        boxShadow: "inset 0 0 0 100vmax rgba(0,0,0,.3)",
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
  const navigate = useNavigate()

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  })
  const [errorMessage, setErrorMessage] = useState('')
  const { authData, error, isError } = useSelector((state) => state.authReducer)

  const loginSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')
    await dispatch(
      logIn({
        email: loginData?.username,
        password: loginData?.password,
      }),
    )
    console.log(loginData)
  }

  // const {  } = useSelector(
  //   (state) => state?.auth,
  // )

  useEffect(() => {
    if (authData?.data && !isError) {
      navigate(path.home)
    }
  }, [authData])
  // useEffect(()=>{
  //   setErrorMessage("")
  // })

  useEffect(() => {
    if (isError && error != null) {
      // toast.error(error?.message)
      setErrorMessage(error?.message)
    } else {
      // setErrorMessage('')
    }
  }, [isError, error])

  return (
    <div className="a-right" style={{ color: 'black', }}>
      <form onSubmit={loginSubmit} className="infoForm authForm">
        <h3>Log In</h3>
        <h4 style={{color:"red"}}>{errorMessage}</h4>
        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
            required
            id="username"
            onChange={(e) => {
              setLoginData({
                ...loginData,
                username: e.target?.value,
              })
              setErrorMessage('')
            }}
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
            required
            id="password"
            onChange={(e) => {
              setLoginData({
                ...loginData,
                password: e.target?.value,
              })
              setErrorMessage('')
            }}
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

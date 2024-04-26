import * as AuthApi from "../api/authRequest"

export const logIn=(formData)=>async (dispatch)=>{

    dispatch({type:"AUTH_START"})
    try {
          console.log(formData,"formdata");
        const {data}=await AuthApi.logIn(formData)
        dispatch({type:"AUTH_SUCCESS",data:data})
    } catch (error) {
       console.log(error,"loginError");
       dispatch({type:"AUTH_FAIL",data:error?.response?.data })
    }
}


export const signUp=(formData)=>async (dispatch)=>{

    dispatch({type:"AUTH_START"})
    try {
        const {data}=await AuthApi.signUp(formData)
        dispatch({type:"AUTH_SUCCESS",data:data})
    } catch (error) {
       console.log(error);
       dispatch({type:"AUTH_FAIL",data:error })
    }
}

export const logout=()=>async(dispatch)=>{
    dispatch({type:"LOGOUT"})
}
import axios from "axios"

const API =axios.create({baseURL:"http://localhost:5000/api/v1"})

export const logIn=(formdata)=>API.post("/user/login",formdata)
export const signUp=(formdata)=>API.post("/auth/register",formdata)
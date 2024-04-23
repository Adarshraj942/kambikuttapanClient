import axios from "axios"
import { appConfig } from "../config/appConfig";

const API = axios.create({ baseURL: appConfig.apiUrl });

export const logIn=(formdata)=>API.post("/user/login",formdata)
export const signUp=(formdata)=>API.post("/auth/register",formdata)
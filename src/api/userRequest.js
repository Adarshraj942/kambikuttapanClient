import axios from "axios";
import { appConfig } from "../config/appConfig";
import { getLocalStorageItem } from "../utils/appUtils";

const API = axios.create({ baseURL: appConfig.apiUrl });

export const getUserProfile = async () => {
  try {
    const userData = getLocalStorageItem("profile");
    return await API.get(`/user`, {
      headers: {
        Authorization: `Bearer ${userData?.data?.token}` // Include the Bearer token in the Authorization header
      }
    });
  } catch (error) {
    console.log(error);
  }
};

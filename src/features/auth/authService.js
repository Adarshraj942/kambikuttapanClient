import { postApi } from "../../api/api";
import { setLocalStorage } from "../../utils/appUtils";


const register = async (userData) => {
  const data = await postApi({
    url: "user",
    body: userData,
    authToken: false
  });
  
  if (data) {
    setLocalStorage("user", data?.data); 

    return data;
  }
};

const login = async (userData) => {
  const data = await postApi({
    url: `user/login`,
    body: userData,
    authToken: false
  });

  if (data) {
    setLocalStorage("user", data?.data);
  }
  return data;
};

const authService = {
  register,
  login
};
export default authService;

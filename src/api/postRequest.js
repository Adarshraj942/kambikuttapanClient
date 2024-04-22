import axios from "axios";
import { getLocalStorageItem } from "../utils/appUtils";

const API = axios.create({ baseURL: "http://localhost:5000/api/v1" });

export const getAllPosts = async () => {
  try {
    const userData = getLocalStorageItem("profile");
    return await API.get("/post", {
      headers: {
        Authorization: `Bearer ${userData?.data?.token}` // Include the Bearer token in the Authorization header
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const likeAndCommentPost = (id, userId) => {
  try {
    const userData = getLocalStorageItem("profile");
    const token = userData?.data?.token;

    API.patch(
      `post/user/${id}`,
      {
        userId: userId,
        like:true
      },
      {
        headers: {
          Authorization: `Bearer ${token}` // Include the Bearer token in the Authorization header
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

import axios from "axios";
import { getLocalStorageItem } from "../utils/appUtils";
import { appConfig } from "../config/appConfig";

const API = axios.create({ baseURL: appConfig.apiUrl });

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
export const getPostById = async ({postId}) => {
  try {
    const userData = getLocalStorageItem("profile");
    return await API.get(`/post/${postId}`, {
      headers: {
        Authorization: `Bearer ${userData?.data?.token}` // Include the Bearer token in the Authorization header
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const likeAndCommentPost = async (id, userId) => {
  try {
    const userData = getLocalStorageItem("profile");
    const token = userData?.data?.token;

    return await API.patch(
      `post/user/${id}`,
      {
        userId: userId,
        like: true
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
export const createPost = async (postData) => {
  try {
    const userData = getLocalStorageItem("profile");
    const token = userData?.data?.token;

    return await API.post(
      `post`,
      {
        ...postData
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

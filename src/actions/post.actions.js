import * as PostApi from "../api/postRequest";

export const getAllPosts = () => async (dispatch) => {
  dispatch({ type: "FETCH_START" });
  try {
    const { data } = await PostApi.getAllPosts();
    dispatch({ type: "FETCH_SUCCESS", data: data?.data });
  } catch (error) {
    console.log(error, "errorrorrosss");
    dispatch({ type: "FETCH_FAILED" });
  }
};
export const createPost = (postData) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    const { data } = await PostApi.createPost(postData);
    console.log(data,"post data success");
    dispatch({ type: "UPLOAD_SUCCESS", data: data?.data });
  } catch (error) {
    console.log(error?.message, "errorrorro");
    dispatch({ type: "UPLOAD_FAILED" });
  }
};

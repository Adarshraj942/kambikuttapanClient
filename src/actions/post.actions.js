import * as PostApi from "../api/postRequest";

export const getAllPosts = () => async (dispatch) => {
          console.log("hello how are you");
  dispatch({ type: "FETCH_START" });
  try {
    const { data } = await PostApi.getAllPosts();
    console.log(data?.data,"grapes");
    dispatch({ type: "FETCH_SUCCESS", data: data?.data });
  } catch (error) {
    console.log(error, "errorrorro");
    dispatch({ type: "FETCH_FAILED" });
  }
};

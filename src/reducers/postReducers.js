const postReducer = (
  state = { posts: [], loading: false, error: false, uploading: false },
  action
) => {
  switch (action.type) {
    case "UPLOAD_START":
      return { ...state, error: false, uploading: true };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        posts: [action.data, ...state.posts],
        uploading: false,
        error: false
      };
    case "UPLOAD_FAIL":
      return { ...state, uploading: false, error: true };
    case "FETCH_START":
      return { ...state, error: false, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, posts: [action.data] };
    case "FETCH_FAILED":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default postReducer;
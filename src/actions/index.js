import jsonPlaceholder from "../apis/jsonPlaceholder";

const fetchPosts = async () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({
    type: "FETCH_POST",
    payload: response
  });
};

export default fetchPosts;

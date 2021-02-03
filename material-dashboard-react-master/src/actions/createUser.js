export const CREATE_USER = "CREATE_USER";

export const signUp = (dispatch, obj) => {
  dispatch({
    type: CREATE_USER,
    payload: obj,
  });
};

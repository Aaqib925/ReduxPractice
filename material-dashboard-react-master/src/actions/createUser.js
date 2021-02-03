export const CREATE_USER = "CREATE_USER";

export const createUser = (dispatch, obj) => {
  dispatch({
    type: CREATE_USER,
    payload: obj,
  });
};

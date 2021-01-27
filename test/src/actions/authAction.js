export const REGISTER_SUCCESS = "REGISTER_SUCCESS";

export const register = (obj) => {
  return {
    type: REGISTER_SUCCESS,
    payload: obj
  };
};
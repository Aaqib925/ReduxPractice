const errorHandler = (store) => (next) => (action) => {
  if (action.type === "error")
    console.log("Toastify: ", action.payload.message);
  else action(next);
};
export default errorHandler;

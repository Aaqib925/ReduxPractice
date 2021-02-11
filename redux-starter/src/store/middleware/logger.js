const logger = (param) => (store) => (next) => (action) => {
  //   console.log(param);
  //   console.log("action", action);
  next(action);
};
export default logger;

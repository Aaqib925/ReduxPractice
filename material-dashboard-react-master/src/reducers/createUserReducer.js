// let lastID = 0;

const createUserReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE_USER":
      return [
        ...state,
        {
          id: action.payload.id,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          userActions: action.payload.userActions,
        },
      ];
    default:
      return state;
  }
};
export default createUserReducer;

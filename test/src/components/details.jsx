import myStore from "../store/mystore";
import Profile from "./profile";

const ShowDetails = () => {
  const data = myStore.getState();
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Email: {data.authReducer.email}</h2>
      <h2>Password: {data.authReducer.password}</h2>
      <Profile />
    </div>
  );
};

export default ShowDetails;

import React from "react";
import myStore from "../store/mystore";

const profile = () => {
  const data = myStore.getState();
  return (
    <div>
      <h1>Profile</h1>
      <h2>UserName: {data.authReducer.userName}</h2>
    </div>
  );
};

export default profile;

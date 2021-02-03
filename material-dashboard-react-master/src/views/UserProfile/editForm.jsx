import React from "react";
import { Link } from "react-router-dom";

const editForm = () => {
  return (
    <div>
      <h1>Edit User</h1>
      <Link to="admin/user">Go Back</Link>
    </div>
  );
};

export default editForm;

import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
// import Store from "../../store/store";
import { useDispatch } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import { createUser } from "../../actions/createUser";
const AddUser = () => {
  let id = 0;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);

  const btnstyle = { margin: "8px 0" };
  const dispatch = useDispatch();
  const fieldStyle = { margin: "10px 0px" };
  const handleUserName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const validateEmail = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const checkForValidEmail = (email) => {
    if (!validateEmail(email)) setValidEmail(false);
    else setValidEmail(true);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const createDivOfActions = () => {
    return (
      <div>
        <IconButton>
          <EditIcon onClick={() => console.log(id)} />
        </IconButton>
        <IconButton>
          <DeleteIcon onClick={() => console.log("Delete Icon")} />
        </IconButton>
      </div>
    );
  };
  const handleRegister = () => {
    const userActions = createDivOfActions();
    createUser(dispatch, { ID: ++id, firstName, lastName, email, userActions });

    setFirstName("");
    setEmail("");
    setLastName("");
  };
  const openButton = () => {
    return validEmail;
  };
  return (
    <div
      style={{
        marginTop: "10%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid>
        <Grid align="left">
          <h1>Add User</h1>
        </Grid>
        <TextField
          style={fieldStyle}
          label="First Name"
          value={firstName}
          placeholder="Enter First Name"
          required
          fullWidth
          onChange={(e) => handleUserName(e)}
        />
        <TextField
          style={fieldStyle}
          label="Last Name"
          value={lastName}
          placeholder="Enter Last Name"
          type="text"
          fullWidth
          required
          onChange={handleLastName}
        />
        <TextField
          style={fieldStyle}
          label="Email"
          value={email}
          placeholder="Enter Email"
          error={!validEmail}
          helperText={validEmail ? "" : "Invalid Email "}
          fullWidth
          required
          onChange={handleEmail}
          onBlur={() => {
            checkForValidEmail(email);
          }}
        />

        <Button
          disabled={!openButton()}
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          onClick={handleRegister}
        >
          Add User
        </Button>
        <Button type="submit" color="secondary" style={btnstyle}>
          <Link to="admin/user" color="white">
            Go Back
          </Link>
        </Button>
      </Grid>
    </div>
  );
};

export default AddUser;

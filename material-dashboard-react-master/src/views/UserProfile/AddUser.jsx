import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
// import Store from "../store/store";
// import { useDispatch } from "react-redux";
// import { signUp } from "../actions/signUpAction";
const AddUser = () => {
  const [userName, setUserName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  // const storeData = Store.getState().signUpReducer;

  const btnstyle = { margin: "8px 0" };
  // const dispatch = useDispatch();
  const fieldStyle = { margin: "10px 0px" };
  const handleUserName = (e) => {
    setUserName(e.target.value);
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

  // const handleRegister = () => {
  //   signUp(dispatch, { userName, password, email });
  //   setUserName("");
  //   setEmail("");
  //   setPassword("");
  // };
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
          value={userName}
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
          // onClick={handleRegister}
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

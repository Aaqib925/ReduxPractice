import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Grid,
  Paper,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
  Button,
} from "@material-ui/core";
import { register } from "../actions/authAction";

const Login = ({
  addUserName,
  addPassword,
  clickedButton,
  addEmail,
  isValidData,
  checkForValidEmail,
  email,
  valid,
  userName,
  password,
}) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const paperStyle = {
    display: "flex",
    justifyContent: "center",
    padding: 30,
    height: "70vh",
    width: 400,
    backgroundColor: "rgba(244, 244, 244, 0.9)",
  };
  const fieldStyle = {
    margin: "8px 0",
  };
  const handleButtonClick = () => {
    dispatch(
      register({ userName: userName, password: password, email: email })
    );
    history.push("/details");
  };
  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <div style={{ opacity: 1 }}>
            <h3>CUSTOM LOGIN</h3>
            <TextField
              style={fieldStyle}
              label="User Name"
              placeholder="Enter User Name"
              fullWidth
              required
              variant="outlined"
              onChange={addUserName}
              value={userName}
            />
            <TextField
              style={fieldStyle}
              error={!valid}
              helperText={valid ? "" : "Invalid Email"}
              label="Email"
              placeholder="Enter Email"
              fullWidth
              required
              variant="outlined"
              onChange={addEmail}
              value={email}
              onBlur={() => checkForValidEmail(email)}
            />
            <TextField
              style={fieldStyle}
              label="Password"
              type="password"
              placeholder="Enter Password"
              fullWidth
              required
              variant="outlined"
              value={password}
              onChange={addPassword}
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Remember me"
            />
            <Button
              disabled={!isValidData()}
              onClick={handleButtonClick}
              style={fieldStyle}
              type="submit"
              color="primary"
              variant="contained"
              history={history}
            >
              Sign in
            </Button>
            <Typography style={fieldStyle}>
              <Link href="#">Lost Your password?</Link>
            </Typography>
          </div>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;

import "./App.css";
import Login from "./components/login";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShowDetails from "./components/details";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [valid, alterValid] = useState(true);

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const isValidData = () => {
    return userName.length && password.length && valid;
  };
  const validateEmail = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const confirmEmail = (email) => {
    if (validateEmail(email)) alterValid(true);
    else alterValid(false);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <div className="App">
            <Login
              addUserName={handleUserName}
              userName={userName}
              password={password}
              email={email}
              addPassword={handlePassword}
              addEmail={handleEmail}
              checkForValidEmail={confirmEmail}
              valid={valid}
              isValidData={isValidData}
            />
          </div>
        </Route>

        <Route
          path={"/details"}
          render={() => (
            <ShowDetails
              userName={userName}
              password={password}
              email={email}
              isAuthed={true}
            />
          )}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;

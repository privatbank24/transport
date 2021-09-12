import { Button, Tooltip } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { checkToken, signIn } from "../../actions/authentication";
import { changePageTitle } from "../../utils/changePageTitle";
import { ROUTES } from "../../utils/routes";
import "./index.scss";

export const SignIn = () => {
  const history = useHistory();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [wrongCredentials, setWrongCredentials] = useState<boolean>(false);

  const onSubmit = async () => {
    try {
      await signIn(username, password);
      history.push(ROUTES.DASHBOARD);
    } catch (error: any) {
      if (
        error.message.slice(-3) === "400" ||
        error.message.slice(-3) === "401"
      ) {
        setWrongCredentials(true);
      }
    }
  };

  useEffect(() => {
    changePageTitle("login");
  }, []);

  return (
    <div className="login">
      <div className="login__content">
        <h1>Welcome!</h1>
        <input
          placeholder="Username"
          value={username}
          type="text"
          onChange={(e: any) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          value={password}
          type="password"
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <p className={!wrongCredentials ? "hidden" : ""}>
          Make sure you enter your username and password correctly.
        </p>
        <div>
          <Button disabled={!username || !password} onClick={onSubmit}>
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
};

import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { checkTokenOnSignInPage, signIn } from "../../actions/authentication";
import { logout } from "../../actions/logout";
import { LogoutModal } from "../../components/LogoutModal";
import { changePageTitle } from "../../utils/changePageTitle";
import { ROUTES } from "../../utils/routes";
import "./index.scss";

export const SignIn = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [wrongCredentials, setWrongCredentials] = useState<boolean>(false);
  const [isLogoutModalOpened, setIsLogoutModalOpened] =
    useState<boolean>(false);

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

  const tokenCheck = async () => {
    if (token) {
      setIsLogoutModalOpened(true);
      try {
        await checkTokenOnSignInPage();
      } catch (error) {
        logout();
        setIsLogoutModalOpened(false);
      }
    }
  };

  useEffect(() => {
    changePageTitle("login");
    tokenCheck();
  }, [token]);

  return (
    <>
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
      <LogoutModal
        open={isLogoutModalOpened}
        setOpen={setIsLogoutModalOpened}
        logout={() => {
          setIsLogoutModalOpened(false);
          logout();
        }}
        goBack={() => history.replace(ROUTES.DASHBOARD)}
      />
    </>
  );
};

import { ROUTES } from "../utils/routes";
import history from "../utils/history";

export const logout = () => {
   localStorage.clear();
   history.push(ROUTES.LOGIN);
}
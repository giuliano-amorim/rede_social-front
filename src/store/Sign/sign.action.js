import { saveLocalStorage } from "../../config/auth";
import { authService } from "../../services/authService";
import history from "../../config/history";

export const SIGN = "SIGN";
export const SIGN_LOADING = "SIGN_LOADING";

export const signIn = (props) => {
  return async (dispatch) => {
    dispatch({ type: SIGN_LOADING, loading: true });

    const { data } = await authService(props);
    console.log("data", data);
    dispatch({ type: SIGN, data: data });
    saveLocalStorage(data);
    history.push("/");
  };
};

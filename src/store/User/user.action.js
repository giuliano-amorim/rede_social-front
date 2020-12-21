import {
  getProfileUser,
  deleteEducationService,
} from "../../services/userService";
import { toastr } from "react-redux-toastr";

const getProfile = (props) => {
  return async (dispatch, getState) => {
    const { auth } = getState();

    const { data } = await getProfileUser(auth.user.id);
    dispatch({ type: "SET_PROFILE", profile: data });
  };
};

const deleteEducation = (id) => {
  return async (dispatch) => {
    // dispatch({ type: "DELETE_EDUCATIOn", profile: data });

    const del = await deleteEducationService(id);
    if (del) {
      toastr.success("SUCESSO !", "Cadastro de postagem feito com sucesso.");
      getProfile();
    }
  };
};

export { getProfile, deleteEducation };

import { getPostsService, createPostService } from "../../services/posts";
import { toastr } from "react-redux-toastr";

export const POST_LOADING = "POST_LOADING";
export const GET_POSTS = "GET_POSTS";
export const CREATE_POST = "CREATE_POST";

export const getPostAll = () => {
  return async (dispatch) => {
    dispatch({ type: POST_LOADING, status: true });
    console.log("atualizando....");
    //
    const posts = await getPostsService();
    dispatch({ type: GET_POSTS, data: posts.data });
  };
};

export const createPost = (form) => {
  return async (dispatch) => {
    const post = {
      // author: "Giuliano",
      title: form.title,
      // description: form.description,
      // created_at: "Sunday, March 8, 2020 11:33 PM",
      // avatar: "http://placehold.it/300x300",
    };
    dispatch({ type: POST_LOADING, status: true });
    try {
      const res = await createPostService(post);
      if (res.data) {
        dispatch({ type: CREATE_POST, post });
        await getPostAll();
        toastr.success("SUCESSO !", "Cadastro de postagem feito com sucesso.");
      }
    } catch (error) {
      toastr.error("Cadastro de postagem feito com sucesso.");
    }
  };
};

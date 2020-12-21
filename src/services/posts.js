import http from "../config/http";

const getPostsService = () => {
  // return http.get(`/posts?_page=${page}&_limit=${limit}&_sort=id,views&_order=desc,asc`);
  return http.get(`/topic`);
};

// const getCountPostsService = async (page = 1) => {
//   const { data } = await http.get(`/posts`);
//   return data.length;
// };

const createPostService = (data) => {
  return http.post(`/topic`, data);
};

export { getPostsService, createPostService };

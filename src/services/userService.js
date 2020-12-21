import http from "../config/http";

const getProfileUser = async (id) => await http.get(`/user/${id}`);

const deleteEducationService = async (id) => await http.delete(`/education`, { "_id": id });

export { getProfileUser, deleteEducationService };

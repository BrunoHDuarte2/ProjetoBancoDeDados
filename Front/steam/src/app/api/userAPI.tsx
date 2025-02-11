import api from "../../utils/api";

export const getUser = async (data: any) => {
  try {
    const response = await api.get(`/usuarioSearch/${data.username}`)
    return response.data;
  } catch (error) {
    return error;
  }
}

export const createUser = async (data: any) => {
  try {
    await api.post("/usuarioCreate", data);
  } catch (error) {
    return error;
  }
}
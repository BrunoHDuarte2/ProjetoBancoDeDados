import api from "../../utils/api";

export const getUser = async (username: any) => {
  try {
    const response = await api.get(`/usuarioSearch/${username}`)
    return response.data;
  } catch (error) {
    return error;
  }
}

export const getUserPicture = async (username: any) => {
  try {
    const response = await api.get(`/usuarioSearchPicture/${username}`)
    return response.data;
  } catch (error) {
    return error;
  }
}

export const getUserPassword = async (username: any) => {
  try {
    const response = await api.get(`/usuarioSearchPassword/${username}`)
    return response.data;
  } catch (error) {
    return error;
  }
}

export const getUserEmail = async (username: any) => {
  try {
    const response = await api.get(`/usuarioSearchEmail/${username}`)
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

export const deleteUser = async (username: any) => {
  try {
    await api.delete(`/usuarioDelete/${username}`);
  } catch (error) {
    return error;
  }
}
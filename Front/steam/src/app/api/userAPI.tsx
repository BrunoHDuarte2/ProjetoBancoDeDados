import api from "../../utils/api";

export const getUser = async (username: any) => {
  try {
    const response = await api.get(`/usuarioSearch/${username}`)
    return response.data;
  } catch (error) {
    return error;
  }
}

export const updateUser = async (user : any) => {
  try {
    await api.put(`/usuarioUpdate/${user.nome}`, user)
  } catch (error) {
    return error;
  }
}

export const updatePicture = async (data:any, user: any) => {
  try {
    await api.post(`/modificaImagemUser/${user.nome}`, JSON.stringify({"dado": data.split(",")[1]}))
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
import api from "../../utils/api";

export const createUser = async (data: any) => {
  try {
    await api.post("/usuarioCreate", data);
  } catch (error) {
    return error;
  }
}
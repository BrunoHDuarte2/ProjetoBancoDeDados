import api from "../../utils/api";
import { createUser } from "./userAPI";

export const signIn = async (data: any) => {
    const response = await api.post("/usuarioLogin", data);
    return response.data;
}

export const signUp = async (data: any) => {
    const response = await createUser(data);
    return response.data;
}
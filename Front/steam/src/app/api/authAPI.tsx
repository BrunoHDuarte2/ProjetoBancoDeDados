import api from "../../utils/api";
import { createUser } from "./userAPI";
import { getUser } from "./userAPI"

export const signIn = async (data: any) => {
    const response = await getUser(data.username);
    if (response.senha === data.password) {
        return response;
    }
    return false;
}

export const signUp = async (data: any) => {
    const response = await createUser(data);
}
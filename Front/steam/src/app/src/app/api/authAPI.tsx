import api from "../../utils/api";
import { createUser } from "./userAPI";
import { createCart } from "./cartAPI";
import { createInventory } from "./inventoryAPI";
import { getUser } from "./userAPI"

export const signIn = async (data: any) => {
    const response = await getUser(data.username);
    if (response.senha === data.password) {
        return response;
    }
    return false;
}

export const signInProducer = async (data: any) => {
    const response = await getUser(data.cnpj);
    if (response.senha === data.password) {
        return response;
    }
    return false;
}
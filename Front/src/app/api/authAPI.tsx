import api from "../../utils/api";
import { createUser } from "./userAPI";
import { createCart } from "./cartAPI";
import { createInventory } from "./inventoryAPI";
import { getUser } from "./userAPI"
import { getProducer } from "./producerAPI"

export const signIn = async (data: any) => {
    const response = await getUser(data.username);
    if (response.senha === data.password) {
        return response;
    }
    return false;
}

export const signInProducer = async (data: any) => {
    const response = await getProducer(data.nome);
    if (response.senha.trim() == data.password.trim()) {
        return response;
    }
    return false;
}
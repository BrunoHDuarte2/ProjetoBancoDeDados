import api from "../../utils/api";
import { createUser } from "./userAPI";
import { createCart } from "./cartAPI";
import { createInventory } from "./inventoryAPI";
import { getUser } from "./userAPI"

export const signIn = async (data: any) => {
    const response = await getUser(data.username);
    if (response.data.senha === data.password) {
        return response.data;
    }
    return false;
}

export const signUp = async (data: any) => {
    await createUser(data);
    await createCart(data.username);
    await createInventory(data.username);
}
import api from "../../utils/api";

export const createCart = async (username: string) => {
    try{
        const response = await api.post("/carrinhoCompraCreate", {idItem: null,idUsuario: username});
        return response.data;
    } catch(error){
        console.log(error)
    }
}

export const getItemsFromCart = async (username:string) => {
    try{
        const response = await api.get(`/carrinhoDeComprasDeUmUsuario/${username}`);
        return response.data.jogos;
    } catch(error){
        console.log(error)
    }
}

export const addGameToCart = async (idItem: number, idUsuario: string) => {
    try{
        const response = await api.post("/carrinhoCompraCreate", {idItem: idItem, idUsuario: idUsuario});
        return response.data;
    } catch(error){
        console.log(error)
    }
}
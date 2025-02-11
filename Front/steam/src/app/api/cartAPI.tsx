import api from "../../utils/api";

export const createCart = async (username: string) => {
    try{
        const response = await api.post("/carrinhoCompraCreate", {idItem: null,idUsuario: username});
        return response.data;
    } catch(error){
        console.log(error)
    }
}
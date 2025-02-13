import api from "../../utils/api";

export const getAllGames = async () => {
    try{
        const response = await api.get("/itemGet");
        return response.data;
    } catch(error){
        console.log(error)
    }
};

export const getGame = async (id: number) => {
    try{
        const response = await api.get(`/itemSearch/${id}`);
        return response.data;
    } catch(error){
        console.log(error)
    }
};
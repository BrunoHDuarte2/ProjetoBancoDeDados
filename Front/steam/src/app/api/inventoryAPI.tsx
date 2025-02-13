"use client"

import api from "../../utils/api";

export const getInventory = async (username: string) => {
    try {
        const response = await api.get(`/inventarioGet/${username}`);
        return response.data;
    } catch(error){
        console.log(error)
    }
}

export const createInventory = async (username: string) => {
    try{
        const response = await api.post("/inventarioCreate", {idUsuario: username});
        return response.data;
    } catch(error){
        console.log(error)
    }
}
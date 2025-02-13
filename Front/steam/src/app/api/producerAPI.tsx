import api from "../../utils/api";

export const createProducer = async (data: any) => {
    try {
      await api.post("/produtoraCreate", data);
    } catch (error) {
      return error;
    }
  }

  export const getProducer = async (username: any) => {
    try {
      const response = await api.get(`/produtoraSearch/${username}`)
      return response.data;
    } catch (error) {
      return error;
    }
  }

  export const deleteProducer = async (username: any) => {
    try {
      const response = await api.delete(`/produtoraDelete/${username}`)
      return response.data;
    } catch (error) {
      return error;
    }
  }

  export const updateProducer = async (username: any) => {
    try {
      await api.put(`/produtoraUpdate/${username}`)
    } catch (error){ return error }
  }
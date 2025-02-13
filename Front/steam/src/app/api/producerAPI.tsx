import api from "../../utils/api";

export const createProducer = async (data: any) => {
    try {
      await api.post("/produtoraCreate", data);
    } catch (error) {
      return error;
    }
  }
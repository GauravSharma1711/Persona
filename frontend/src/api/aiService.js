import axiosInstance from "./axios.js";

const aiService = {

    fetchAnswer : async (question,fullName)=>{
        const res = await axiosInstance.post(`/ai/${fullName}`,{question});
        return res.data;
    }

}

export default aiService
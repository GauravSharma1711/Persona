import { create } from 'zustand';

import toast from 'react-hot-toast';
import authService from '../api/aiService.js';

const useMessageStore = create((set)=>({

     Ansmessage:null,
     messages:[],

     getAnswer : async(question,fullName)=>{
 try {
    
   set((state) => ({
      messages: [
        ...state.messages,
        { answer: question, myQuestion: true },
      ],
    }));

    const res = await authService.fetchAnswer(question,fullName)
  
      set((state) => ({
        messages: [
          ...state.messages,
          { answer: res.answer , myQuestion: false },
        ],
      }));

} catch (error) {
    console.log(error);
     toast.error("Try Again")
}
     },

   clear: () => {
  set({ messages: [] });
}



}))

export default useMessageStore;
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

      set((state) => ({
        messages: [
          ...state.messages,
          { answer: "", myQuestion: false, isLoading: true }
        ]
      }));

    const res = await authService.fetchAnswer(question,fullName)
    
  
      set((state) => {
        const updated = [...state.messages];
        updated[updated.length - 1] = {
          answer: res.answer,
          myQuestion: false,
          isLoading: false
        }
        return { messages: updated };
      });

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
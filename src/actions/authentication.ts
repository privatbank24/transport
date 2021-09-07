import axios from "axios";
import history from "../utils/history";
import { ROUTES } from "../utils/routes";

export const signIn = async (username: string, password: string): Promise<void> => {
   try {
      const res = await axios.post('http://192.168.0.103:3000/auth/signin', {
         username,
         password
      })
      if (res.data.accessToken) { 
         await localStorage.setItem('token', res.data.accessToken);
      }  
   } catch (error) {
      throw error;
   }
};

export const checkToken = async (): Promise<void> => {
   if (history.location.pathname !== ROUTES.LOGIN) {
      try {
         const token = localStorage.getItem('token');
         await axios.get('http://192.168.0.103:3000/tasks', {
            headers: { 'Authorization': `Bearer ${token}`}
         });
      } catch (error: any) {
         console.log(error.message);
         window.location.href = 'http://192.168.0.103:3001/';
         throw error;
      }
   }
}
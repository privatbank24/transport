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
         await axios.get('http://192.168.0.103:3000/categories', {
            headers: { 'Authorization': `Bearer ${token}`}
         });
      } catch (error: any) {
         console.log(error.message);
         window.location.href = 'http://192.168.0.103:3001/';
         throw error;
      }
   }
}

export const getAllTickets = async (): Promise<any> => {
   try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://192.168.0.103:3000/codes', {
         headers: {
            'Authorization': `Bearer ${token}` 
         }
      });
      return res.data;
   } catch (error) {
      throw error;
   }
}

export const sendCode = async (title: string | null, description: string): Promise<any> => {
   try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://192.168.0.103:3000/codes', 
      {
         title, 
         description,
      },
      {
         headers: {
            'Authorization': `Bearer ${token}` 
         }
      });
      return res.data;
   } catch (error) {
      throw error;
   }
}
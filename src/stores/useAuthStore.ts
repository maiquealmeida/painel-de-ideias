import { ref } from 'vue'
import { defineStore } from 'pinia'
import AuthService from '@/services/AuthService';

export interface IUser {
  name: string;
  email: string;
  avatar: string;
}


export const useAuthStore = defineStore('auth', () => {
  const accessToken = ref<string | null>(null);
  const user = ref<IUser | null>(null)

  function setToken(accesToken: string | null) {
    accessToken.value = accesToken;
    localStorage.setItem('accessToken', accesToken);
    console.log('>>>>>> ', accesToken)
  }

  function setUser(userData: IUser) {
    user.value = userData;
  }

  function rehydratate() {
    const localAccessToken = localStorage.getItem('accessToken');
    if (!localAccessToken) {
      return;
    }
    setToken(localAccessToken);
  }

  async function login(email: string, password: string) {
    try {
      console.log("login: ", { email, password });

      const result = await AuthService.login(email, password);
      console.log("result: ", { result });

      setToken(result?.accessToken)
    } catch (err) {
      console.log('>>> Err: ', err);

    }
  }

  async function logout() {
    try {
      setToken(null);
      localStorage.removeItem('accessToken');

    } catch (err) {
      // TODO handle error
    }
  }

  return { accessToken, setUser, user, setToken, login, logout, rehydratate }
})

import apiClient from "@/services/api";

export default class AuthService {
  static async login(email: string, password: string) {
    try {
      const response = await apiClient.post('/login', {
        email, password
      });

      console.log('Response from axios: ', response)
    } catch (err) {
      const error: Error = err as Error;
      // TODO: Melhorar isso
      console.error('Ocorreu um erro ao autenticar: ', error)
    }



  }
}
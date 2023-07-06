import apiClient from "@/services/api";

export default class AuthService {
  static async login(email: string, password: string) {
    const response = await apiClient.post('/login', {
      email, password
    });

    console.log('Response from axios: ', response)
    return { accessToken: response.data.access_token }
  }
}
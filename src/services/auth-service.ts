import api from './api'

//Quando eu receber um bad request, significa que minha requisição está mal formada. Nesse caso, faltou o parâmetro (nome e e-mail) que são 'itens' obrigatórios ao fazer o post
const UserServices: any = {
  registerUser: async (userEmail: string, userPassword: string) => {
    api.post('/register', { email: userEmail, password: userPassword })
  },
  loginUser: async (userEmail: string, userPassword: string) => {
    const response = await api.post('/login', { email: userEmail, password: userPassword })
    return response
  }
}

export default UserServices
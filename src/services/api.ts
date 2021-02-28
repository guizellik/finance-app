import axios from 'axios'

const baseAPIURL = 'http://localhost:4000'

const api = axios.create({
  baseURL: baseAPIURL
})

export default api
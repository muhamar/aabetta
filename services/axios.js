import axios from 'axios'
import { baseApiUrl } from '../config'
import { getToken } from '../utils/token'

axios.defaults.baseURL = baseApiUrl
axios.defaults.headers.Accept = 'application/json'

export default axios

export const axiosAuth = () => {
  return getToken().then(token => {
    if(!token) return axios
    const service = axios
    service.defaults.headers.Authorization = token
    return service
  })
}

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://rel.ink/api/links'
})

export default instance;
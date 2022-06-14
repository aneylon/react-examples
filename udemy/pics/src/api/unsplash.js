import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID YCaLm5skFePyfMI7GZzCjeBegHDOHqmmIJyWBVA7mrU'
  }
})
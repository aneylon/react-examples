import axios from 'axios'

const KEY = 'AIzaSyASdD3lcK0ohLllmyehhFhi7TB1fDa2Zvs'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
  }
})
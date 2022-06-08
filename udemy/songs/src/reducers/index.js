import { combineReducers } from "redux"

const songsReducer = () => {
  return [
    {
      title: 'one',
      duration: '1:01'
    },
    {
      title: 'two',
      duration: '2:02'
    },
    {
      title: 'three',
      duration: '3:03'
    },
    {
      title: 'four',
      duration: '4:04'
    },
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload
  }
  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})
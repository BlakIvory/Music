import actionTypes from "../actions/ActionTypes";

const initState = {
  curSongId: null,
  curSongData: null,
  isPlaying: false,
  inAlbum: false,
  songs: null,
  curAlbumId: null,
  recentSongs: [],
};

const musicReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_CUR_SONG_ID:
      return {
        ...state,
        curSongId: action.SongId || null,
      };
    case actionTypes.PLAY:
      return {
        ...state,
        isPlaying: action.flag,
      };
    case actionTypes.SET_ALBUM:
      return {
        ...state,
        inAlbum: action.flag,
      };
    case actionTypes.PLAY_LIST:
      return {
        ...state,
        songs: action.songs || null,
      };
    case actionTypes.SET_CUR_SONG_DATA:
      return {
        ...state,
        curSongData: action.data || null,
      };
    case actionTypes.SET_CUR_ALBUM_ID:
      return {
        ...state,
        curAlbumId: action.pid || null,
      };
    case actionTypes.SET_RECENT:
      // console.log(state.recentSongs);
      let songs = state.recentSongs;
      if (action.data) {
        if (state.recentSongs?.some(i => i.sid === action.data.sid))
        {
          songs = songs.filter(i => i.sid !== action.data.sid)
          }
          if (songs.length > 10) {
            songs = songs.filter((i, index, self) => index !== self.length - 1);
          }
        songs = [action.data, ...songs];
      }
      return {
        ...state,
        recentSongs: songs,
      };
    //  [action.data, ...state.recentSongs];
    default:
      return state;
  }
};

export default musicReducer;

import actionTypes from "../actions/ActionTypes";

const initState = {
  curSongId: null,
  isPlaying: false,
  inAlbum: false,
  songs: null,
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
          songs: action.songs||null,
        };

    default:
      return state;
  }
};

export default musicReducer;

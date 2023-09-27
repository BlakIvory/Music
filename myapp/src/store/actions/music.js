import * as apis from "../../apis";

import ActionTypes from "./ActionTypes";

export const setCurSingId = (SongId) => ({
  type: ActionTypes.SET_CUR_SONG_ID,
  SongId,
});

export const play = (flag) => ({
  type: ActionTypes.PLAY,
  flag,
});

export const playAlbum = (flag) => ({
  type: ActionTypes.SET_ALBUM,
  flag,
});
export const setPlaylist = (songs) => ({
    type: ActionTypes.PLAY_LIST,
    songs,
  });
export const fetchDetailPlaylist = (pl_id) => async (dispatch) => {
  try {
    const response = await apis.apiGetDetailPlaylist(pl_id);
    if (response?.data.err === 0) {
      dispatch({
        type: ActionTypes.PLAY_LIST,
        songs: response?.items,
      });
    }
  } catch (error) {
    dispatch({
      type: ActionTypes.PLAY_LIST,
      songs: null,
    });
  }
};

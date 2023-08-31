import * as apis from '../../apis'

import ActionTypes from './ActionTypes'

export const setCurSingId = (SongId) => ({
    type : ActionTypes.SET_CUR_SONG_ID,
    SongId 
})


export const play = (flag) => ({
    type : ActionTypes.PLAY,
    flag,
})

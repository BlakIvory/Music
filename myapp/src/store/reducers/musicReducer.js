import actionTypes from "../actions/ActionTypes";


const initState = { 
    curSongId :null,
    isPlaying: false,
}

const musicReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SET_CUR_SONG_ID:
            return{
            ...state,
            curSongId:action.SongId || null
            }
        case actionTypes.PLAY :
            return {
                ...state,
                isPlaying: action.flag
            }



        default:
            return state;
    }
}

export default musicReducer
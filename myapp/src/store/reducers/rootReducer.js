

import { combineReducers} from "redux";

import {  persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

import musicReducer from "./musicReducer";

import AppReducer from "./appReducer";

const CommonConfig = {
    storage : storage,
    StateReconciler : autoMergeLevel2,
}

const musicConfig = {
  ...CommonConfig,
  key: "music",
  whilelist: ["curSongId", "curSongData", "curAlbumId", "recentSongs"]
};
const rootReducer = combineReducers({
    app : AppReducer,
    music:persistReducer(musicConfig,musicReducer),
})

export default rootReducer




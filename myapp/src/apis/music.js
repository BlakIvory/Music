import axios from "../axios";

export const getSong = (SongId) =>  new Promise(async(resolve,reject) => {
    try{
        const response = await axios({
            url : '/song',
            method : 'get',
            params : { id : SongId}
        })
         
        resolve(response)
  
    }catch(error){
        reject(error)
    }
})

export const getDetailSong = (SongId) =>  new Promise(async(resolve,reject) => {
    try{
        const response = await axios({
            url : '/infosong',
            method : 'get',
            params : { id : SongId}
        })
         
        resolve(response)
  
    }catch(error){
        reject(error)
    }
})






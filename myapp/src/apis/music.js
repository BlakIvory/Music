import axios from "../axios";

export const apiGetSong = (SongId) =>  new Promise(async(resolve,reject) => {
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

export const apiGetDetailSong = (SongId) =>  new Promise(async(resolve,reject) => {
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
export const apiGetDetailPlaylist = (pl_id) =>  new Promise(async(resolve,reject) => {
    try{
        const response = await axios({
            url : '/detailplaylist',
            method : 'get',
            params : { id :pl_id}
        })
         
        resolve(response)
        console.log(response)
    }catch(error){
        reject(error)
    }
})






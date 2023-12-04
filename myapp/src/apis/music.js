import axios from "../axios";

export const apiGetSong = (SongId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/song",
        method: "get",
        params: { id: SongId },
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetDetailSong = (SongId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/infosong",
        method: "get",
        params: { id: SongId },
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetDetailPlaylist = (pl_id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/detailplaylist",
        method: "get",
        params: { id: pl_id },
      });

      resolve(response);
      // console.log(response)
    } catch (error) {
      reject(error);
    }
  });

export const apiSearch = (keyword) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/search",
        method: "get",
        params: { keyword },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const Login = (user) =>
  new Promise(async (resolve, reject) => {
    try {
      // console.log(user)
      const response = await axios({
        url: "/login",
        method: "post",
        params: user,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const Register = (user) =>
  new Promise(async (resolve, reject) => {
    try {
      // console.log(name +email +password)

      // console.log(user)
      const response = await axios({
        url: "/register",
        method: "post",
        params: user,
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const addFavorite = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      // console.log(data)
      const response = await axios({
        url: "/addFavorite",
        method: "get",
        params: data,
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetAllFavorite = (data) =>
  new Promise(async (resolve, reject) => {
    try {
    //   console.log(data);
      const response = await axios({
        url: "/getAllFavorite",
        method: "get",
        params: data,
      });
        // console.log(response)
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

  export const apiGetAllPlaylist = (data) =>
    new Promise(async (resolve, reject) => {
      try {
          // console.log(data);
        const response = await axios({
          url: "/getPlaylist",
          method: "get",
          params: data,
        });
        // console.log(response)
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });

  export const addPlaylist = (data) =>
    new Promise(async (resolve, reject) => {
      try {
        //   console.log(data);
        const response = await axios({
          url: "/addPlaylist",
          method: "post",
          params: data,
        });
        // console.log(response)
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
      export const addSongToPlaylist = (data) =>
        new Promise(async (resolve, reject) => {
          try {
            //   console.log(data);
            const response = await axios({
              url: "/addSongToPlaylist",
              method: "post",
              params: data,
            });
            // console.log(response)
            resolve(response);
          } catch (error) {
            reject(error);
          }
        });
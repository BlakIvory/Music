const { ZingMp3 } = require("zingmp3-api-full")
const UserService = require("../services/user.service")
const MongoDB = require("../monggoodb")

class ZingController {
  getSong(req, res) {
    ZingMp3.getSong(req.query.id).then((data) => {
      res.json(data);
    });
  }

  getDetailPlaylist(req, res) {
    ZingMp3.getDetailPlaylist(req.query.id).then((data) => {
      res.json(data);
    });
  }

  getHome(req, res) {
    ZingMp3.getHome().then((data) => {
      res.json(data);
    });
  }

  getTop100(req, res) {
    ZingMp3.getTop100().then((data) => {
      res.json(data);
    });
  }

  getChartHome(req, res) {
    ZingMp3.getChartHome().then((data) => {
      res.json(data);
    });
  }

  getNewReleaseChart(req, res) {
    ZingMp3.getNewReleaseChart().then((data) => {
      res.json(data);
    });
  }

  getInfo(req, res) {
    ZingMp3.getInfoSong(req.query.id).then((data) => {
      res.json(data);
    });
  }

  getArtist(req, res) {
    ZingMp3.getArtist(req.query.name).then((data) => {
      res.json(data);
    });
  }

  getArtistSong(req, res) {
    ZingMp3.getListArtistSong(
      req.query.id,
      req.query.page,
      req.query.count
    ).then((data) => {
      res.json(data);
    });
  }

  getLyric(req, res) {
    ZingMp3.getLyric(req.query.id).then((data) => {
      res.json(data);
    });
  }

  search(req, res) {
    ZingMp3.search(req.query.keyword).then((data) => {
      res.json(data);
    });
  }

  getListMV(req, res) {
    ZingMp3.getListMV(req.query.id, req.query.page, req.query.count).then(
      (data) => {
        res.json(data);
      }
    );
  }

  getCategoryMV(req, res) {
    ZingMp3.getCategoryMV(req.query.id).then((data) => {
      res.json(data);
    });
  }

  getVideo(req, res) {
    ZingMp3.getVideo(req.query.id).then((data) => {
      res.json(data);
    });
  }

  login = async (req, res) => {
    // console.log(req.query)

    try {
      // console.log(req.query)
      const userService = new UserService(MongoDB.client);
      const result = await userService.check(req.query);
      // console.log(result)
      if (result.length == 0) {
        return res.send({ message: "Không có tài khoản này !" });
      }
      return res.send({ data: result, message: "Đăng nhập thành công !" });
    } catch (error) {
      return res.send();
    }
  };

  postRegister = async (req, res) => {
    // console.log(req.query)
    // console.log(MongoDB.client)
    const userService = new UserService(MongoDB.client);
    // const documents = await userService.check(req.body);
    // console.log(documents)
    const result = await userService.register(req.query);
    // console.log(result)
    return res.send(result);
  };

  addFavorite = async (req, res) => {
    // console.log(req.body)
    // console.log(req.query)
    // console.log(MongoDB.client)
    const userService = new UserService(MongoDB.client);
    const result = await userService.favorite(req.query);
    return res.send(result);
  };

  getAllFavorite = async (req, res) => {
    // console.log(req.body)
    // console.log(req.query)
    // console.log(MongoDB.client)
    const userService = new UserService(MongoDB.client);
    // const result = await userService.getAllfavorite(req.body);
    const result = await userService.getAllfavorite(req.query);
    return res.send(result);
  };

  addPlaylist = async (req, res) => {
    const userService = new UserService(MongoDB.client);
    // const result = await userService.getAllfavorite(req.body);
    const result = await userService.addPlaylist(req.query);
    return res.send(result);
  };

  getPlaylist = async (req, res) => {
    // console.log(req.body)

    const userService = new UserService(MongoDB.client);

    const data = await userService.check(req.body);
    console.log(data);
    const result = {
      data: data[0].Playlist,
      status: 1,
    };
    return res.send(result);
  };
  addSongToPlaylist = async (req, res) => {
    console.log(req.body)

    const userService = new UserService(MongoDB.client);
    // const data = await userService.check(req.body);
    // console.log(data);
    const result
      = {
      data: data[0].Playlist,
      status: 1,
    };
    return res.send(result);
  };
}

module.exports = new ZingController

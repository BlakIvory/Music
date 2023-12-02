const MongoDB = require("../monggoodb.js");

class UserService {
  constructor(client) {
    this.User = client.db().collection("users");
  }

  extractUserData(payload) {
    const user = {
      name: payload.name,
      email: payload.email,
      password: payload.password,
      favorite: [],
      Playlist : [],
    };
    Object.keys(user).forEach(
      (key) => user[key] === undefined && delete user[key]
    );
    return user;
  }
  async register(payload) {
    // console.log(payload)
    const user = await this.extractUserData(payload);
    // console.log(user);
    const result = await this.User.findOneAndUpdate(
      user,
      { $set: { favorite: [] || null, Playlist: [] || null } },
      { returnDocument: "after", upsert: true }
    );
    return result;
  }

  async check(filter) {
    // console.log( filter);
    const cursor = await this.User.find(filter);
    // console.log( await cursor.toArray() );
    return await cursor.toArray();
  }

  async checkEmail(filter) {
    console.log("filter Email: " + filter);
    const cursor = await this.User.find(filter);
    return await cursor.toArray();
  }

  async findUserById(id) {
    return await this.User.findOne({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
  }
  async favorite(data) {
    // console.log(data.user);
    const users = await this.User.find({ email: data.user });
    const user = await users.toArray();
    // console.log(user[0]);
    const song = data.song;
    // console.log(song)
    const result = await this.User.findOneAndUpdate(
      user[0],
      { $push: { favorite: song } },
      { returnDocument: "after" }
    );
    return result;
  }
  async getAllfavorite(data) {
    // console.log(data);
    const users = await this.User.find({ email: data.email });
    const user = await users.toArray();
    // console.log(user[0].favorite)
    // const result = await this.User.findOneAndUpdate(
    //   user[0],
    //   { $push: { favorite: song } },
    //   { returnDocument: "after" }
    // );
    const result = user[0].favorite;
    return result ;
  }
  async addPlaylist(data) {
    console.log(data.email)
    const playlist = {
      "namePlaylist": data.namePlaylist,
      "listSongs": [],
    };
    const result = await this.User.findOneAndUpdate(
      {email: data.email},
      {
        $push: {Playlist: playlist },
      },
      { returnDocument: "after" }
    );
    return result ;
   }

}

module.exports = UserService;

import MongoDB from "../monggodb";

class UserService {
  constructor(client) {
    this.User = client.db().collection("users");
  }

  extractUserData(payload) {
    const user = {
      name: payload.name,
      email: payload.email,
      password: payload.password,
      favorite: {},
    };
    Object.keys(user).forEach(
      (key) => user[key] === undefined && delete user[key]
    );
    return user;
  }
  async register(payload) {
    console.log(payload)
    const user = await this.extractUserData(payload);
    // console.log(user);
    const result = await this.User.findOneAndUpdate(
      user,
      { $set: { favorite: {} } },
      { returnDocument: "after", upsert: true }
    );
    return result;
  }

  async check(filter) {
    // console.log( filter.email);
    const cursor = await this.User.find(filter);
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
}

module.exports = UserService;

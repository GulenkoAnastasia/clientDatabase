// const fs = require('fs');
const fsp = require('fs').promises;
const { find } = require('lodash');
const path = require('path');

class YourNoSql {
  dataFileName = path.join(__dirname, 'users.json');

  async getList() {
    // const listPromise = new Promise((resolve) => {
    //   fs.readFile(this.dataFileName, 'utf-8', (err, data) => {
    //     resolve(data);
    //   });
    // });

    const listPromise = fsp.readFile(this.dataFileName, 'utf-8');

    const data = await listPromise;
    return JSON.parse(data);
  }

  /**
   *
   * @param {string} id
   * @returns Promise<object>
   */
  async findUser(id) {
    const list = await this.getList();
    return find(list, { _id: id });
  }

  async update(id, Userdata) {
    let userUpdated = false;
    const originalUsers = await this.getList();
    const users = originalUsers.map((user) => {
      if (user._id === id) {
        userUpdated = true;
        return {
          ...user,
          ...Userdata,
        };
      }
      return user;
    });

    if (!userUpdated) {
      throw new Error('User not found');
    }
    const updatedList = await users;
    return this.save(updatedList);
  }

  save(data) {
    return fsp.writeFile(this.dataFileName, JSON.stringify(data, null, 2));
  }
}

module.exports = {
  dbClient: new YourNoSql(),
};

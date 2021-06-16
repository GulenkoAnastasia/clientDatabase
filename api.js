const { dbClient } = require('./yourNoSql.js');

/**
 *
 * @param {import('http').Incomingmessage} req
 * @param {import('http').ServerResponse} res
 */

const handleAPIRequest = async (req, res) => {
  if (req.url.startsWith('/api/update/user/')) {
    const baseURL = `http://${req.headers.host}/`;
    const myURL = new URL(req.url, baseURL);
    const [,,,, id] = myURL.pathname.split('/');

    const userUpdateData = Object.fromEntries(myURL.searchParams.entries());

    try {
      await dbClient.update(id, userUpdateData);
      res.writeHead(200);
      res.end(JSON.stringify({ success: true }));
    } catch (e) {
      res.writeHead(404);
      res.end(JSON.stringify({ success: false, message: `User with id ${id} is not found` }));
    }
  }
};

module.exports = {
  handleAPIRequest,
};

const jwt = require("jsonwebtoken");

const secret = "mysecretsshhhhh";
const expiration = "2h";

// authMiddleware is a "wall" between the client and the server that checks if the user is logged in or not before allowing them to use the server
module.exports = {
  authMiddleware: function ({ req }) {
    // get the token generated from the server from the req.body, req.query, or req.headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // split pop and trim are getting the req info and separating it from the bearer to get only the token itself -> Bearer tokenvalue1kldjkjfkhfjhjdhf
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    // verify if the token received is valid chcking token number, secret and expiration if yes return the request object post, put, delete or get.
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Invalid token");
    }

    return req;
  },

  // function with parameter username, email and _id from resolver mutation addUser in server\schemas\resolvers.js
  signToken: function ({
    loggedInEntity: { username, name, email, _id },
    role,
  }) {
    const payload = { username, name, email, _id, role };

    // creating token when user signs up
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};

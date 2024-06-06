const mongo = require("../db");

const layers = [
  {
    col: mongo.sellers,
    sessionKey: "sellerId",
    route: "seller",
  },
  {
    col: mongo.admin,
    sessionKey: "admin",
    route: "admin",
  },
  {
    col: mongo.magasin,
    sessionKey: "magasin",
    route: "magasin",
  },
  {
    col: mongo.superadmin,
    sessionKey: "superadmin",
    route: "superadmin",
  },
];

const login = async (req, res) => {
  let { username, password } = req.body;
  try {
    for (let layer of layers) {
      let status = await new Promise((resolve, reject) => {
        layer.col.findOne(
          {
            username: username,
          },
          (err, info) => {
            if (err || !info) {
              return resolve(false);
            }
            if (password === info.password) {
              req.session[layer.sessionKey] = info._id.toString();

              //superSeller session
              if (info.superSeller) {
                req.session.superSeller = true;
              }
              resolve(true);
            } else {
              return resolve(false);
            }
          }
        );
      });
      if (status) {
        return res.send({
          logged: true,
          route: layer.route,
        });
      }
    }

    //in case we searched all the collections and no results were found
    res.send({
      error: true,
    });
  } catch (error) {
    res.send({
      error: true,
    });
  }
};

module.exports = login;

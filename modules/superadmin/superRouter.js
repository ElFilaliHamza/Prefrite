const adminIndex = require("../admin/adminIndex");
const articleIndex = require("../articles/articleIndex");
const categorieIndex = require("../categories/categorieIndex");
const clientsIndex = require("../clients/clientsIndex");
const mongo = require("../db");
const { NO_ACCESS, NOT_LOGGED, LOGGED } = require("../ServerConfig");

const superdb_backup = require("./superdb_backup");
const superAccountsIndex = require("./superAccountsIndex");
const superSellersIndex = require("./superSellersIndex");
const debitIndex = require("../debit/debitIndex");
const superAccess = require("./superAccess");
const statsIndex = require("../stats/statsIndex");

const superRouter = require("express").Router();

superRouter.post("/session", (req, res) => {
  if (req.session.superadmin) {
    res.send(LOGGED);
  } else {
    res.send(NOT_LOGGED);
  }
});

superRouter.post("/session/logout", (req, res) => {
  req.session.superadmin = null;
  res.send(NOT_LOGGED);
});

/* //let multer upload before checking for access!
superRouter.post('/articles/add', articleIndex.add);

superRouter.post('/articles/update', articleIndex.artUpdate);
 */
//give access
superRouter.use((req, res, next) => {
  let superadmin = req.session.superadmin;
  if (!superadmin) {
    res.send(NO_ACCESS);
    return false;
  } else {
    next();
  }
});

superRouter.post("/articles/add", articleIndex.add);

superRouter.post("/articles/update", articleIndex.artUpdate);

["getAdmins", "addAdmin"].forEach((route) => {
  superRouter.post("/" + route, adminIndex[route]);
});

["add", "update", "delete", "get", "getOne"].forEach((route) => {
  superRouter.post("/categories/" + route, categorieIndex[route]);
});

["get", "getOne", "delete", "getHistory"].forEach((route) => {
  superRouter.post("/articles/" + route, articleIndex[route]);
});

["count", "get"].forEach((route) => {
  superRouter.post("/alerts/" + route, adminIndex.adminAlerts[route]);
});

["count", "getSellers", "getClients", "getInvoices", "getInvoice"].forEach(
  (route) => {
    superRouter.post("/debit/" + route, debitIndex[route]);
  }
);

["get", "getInactive"].forEach((route) => {
  superRouter.post("/clients/" + route, clientsIndex[route]);
});

["create", "delete", "get", "update"].forEach((route) => {
  superRouter.post("/accounts/" + route, superAccountsIndex[route]);
});

["get", "getOne", "updateCharges"].forEach((route) => {
  superRouter.post("/sellers/" + route, superSellersIndex[route]);
});

["getHistory"].forEach((route) => {
  superRouter.post("/stats/" + route, statsIndex[route]);
});

superRouter.post("/sellersInfo/get", (req, res) => {
  const pipline = [
    {
      $sort: {
        time: -1,
      },
    },
  ];
  mongo.sellers.aggregate(pipline, async (err, sellers) => {
    if (err) {
      return res.send({
        error: true,
      });
    }
    res.send({
      sellers: sellers,
    });
  });
});

superRouter.post("/access", superAccess);

superRouter.post("/db/backup", superdb_backup);

module.exports = superRouter;

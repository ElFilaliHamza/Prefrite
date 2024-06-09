const fs = require('fs');
const appConfig_Server = JSON.parse(fs.readFileSync(__dirname + "/appConfig_Server.json").toString());

module.exports = {
    MONGO_URL: process.env.MONGO_URL_VAR + appConfig_Server.DATABASE_NAME,
    UPLOAD_PATH: process.cwd() + "/uploads/",
    NO_ACCESS: {
        access: false
    },
    LOGGED: {
        logged: true
    },
    NOT_LOGGED: {
        logged: false
    },
    limit: {
        articles: 10,
        categories: 10,
        clients: 10,
        invoice: 10,
        clients: 10,
        alerts: 10,
        cmd: 10,
        stockHistory: 10,
    },
    project: {
        articles: {
            name: 1,
            prixVente: 1,
            prixAchat: 1,
            qtStocke: 1,
            qtAlerte: 1,
            time: 1,
            img: 1,
            catId: 1,
        },
        seller: {
            username: 1,
            name: 1,
            handed: 1,
            lastHandTime: 1,
            superSeller: 1,
        },
    }, 
    maps: {
        fromTypeToColName: {
            seller: 'sellers',
            admin: 'admin',
            magasin: 'magasin',
            superadmin: 'superadmin',
        },
        fromTypeToSessionKey: {
            seller: 'sellerId',
            magasin: 'magasin',
            admin: 'admin',
            superadmin: 'superadmin',
        }
    },
}
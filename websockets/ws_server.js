const sharedsession = require("express-socket.io-session");
const { Server: SocketServer } = require("socket.io");
const { superUsers, sellerUsers, sellerUsersTime } = require("./ws_memory").users;
const mongo = require("../modules/db")
const ServerConfig = require("../modules/ServerConfig");
const sellerProject = ServerConfig.project.seller;

function addSocket(socket, container) {
    var tmp;
    let { userId } = socket;
    if (container[userId]) {
        tmp = container[userId];
    } else {
        tmp = [];
    }
    tmp[socket.id] = socket;
    container[userId] = tmp;
}

function removeSocket(socket, container) {
    delete container[socket.userId][socket.id];
    const sessions = Object.keys(container[socket.userId]).length;
    if (sessions == 0) {
        delete container[socket.userId];
        return {
            gone: true,
        }
    }
    return {
        gone: false,
        sessions: sessions,
    }
}

function getSellerInfo(_id, connected) {
    const sellerInfo = { _id, };
    sellerInfo.connected = connected;
    sellerInfo.connectTime = sellerUsersTime[_id] && sellerUsersTime[_id].connectTime
    sellerInfo.disconnectTime = sellerUsersTime[_id] && sellerUsersTime[_id].disconnectTime
    return sellerInfo;
}

function getConnectedSellers() {
    return new Promise(async (resolve, reject) => {
        const sellers = await new Promise(resolve => {
            mongo.sellers.find({}, sellerProject, (err, data) => {
                resolve(data || []);
            })
        });
        for (let seller of sellers) {
            const _id = seller._id.toString();
            if (sellerUsers[_id]) {
                seller.connected = true;
            }
            seller.connectTime = sellerUsersTime[_id] && sellerUsersTime[_id].connectTime
            seller.disconnectTime = sellerUsersTime[_id] && sellerUsersTime[_id].disconnectTime
        }
        resolve(sellers);
    })
}

function superHandler(socket, userId) {
    socket.userId = userId;
    addSocket(socket, superUsers);

    //emit online sellers
    getConnectedSellers().then(sellers => {
        emitToSuperUserSocket(socket, 'all_sellers', {
            sellers,
        });
    });

    socket.on('disconnect', () => {
        let disconnectStatus = removeSocket(socket, superUsers);
        if (disconnectStatus.gone) {

        }
    });
}

function sellerHandler(socket, userId) {
    socket.userId = userId;

    if (!sellerUsers[userId]) {
        //first connect time
        {
            if (!sellerUsersTime[userId]) {
                sellerUsersTime[userId] = {};
            }
            sellerUsersTime[userId].connectTime = Date.now();
        }

        const sellerInfo = getSellerInfo(userId, true);
        const data = {}
        data.sellerInfo = sellerInfo;
        emitToSuperUsers('seller_connected', data);
    }

    addSocket(socket, sellerUsers);

    socket.on('seller_location', (data) => {
        processSellerLocation(socket, data);
    })

    socket.on('disconnect', async () => {
        let disconnectStatus = removeSocket(socket, sellerUsers);
        if (disconnectStatus.gone) {
            //disconnect time
            {
                if (!sellerUsersTime[userId]) {
                    sellerUsersTime[userId] = {};
                }
                sellerUsersTime[userId].disconnectTime = Date.now();
            }
            const data = {}
            const sellerInfo = getSellerInfo(userId, false);
            data.sellerInfo = sellerInfo;
            emitToSuperUsers('seller_disconnected', data);
        }
    });
}
let i = 0;
function processSellerLocation(socket, data) {
    data._id = socket.userId;
    //data.coords = [33 + (Math.random() * .2), -5 - (Math.random() * .5)]
    /* data.coords = [33 + i, -5 - i];
    i += 0.01 */
    data.time = Date.now();
    emitToSuperUsers('seller_location', data);
}

function emitToSuperUsers(event, data) {
    for (let superadminSockets of Object.values(superUsers)) {
        for (let socket of Object.values(superadminSockets)) {
            emitToSuperUserSocket(socket, event, data);
        }
    }
}

function emitToSuperUserSocket(socket, event, data) {
    socket.emit(event, data);
}

function WS_Server(session) {
    this.io = new SocketServer();
    this.listen = function (server) {
        const { io } = this;
        io.listen(server);
        console.log('WebSocket server is listening on ');
        io.use(sharedsession(session, {
            autoSave: true
        }));
        io.on('connection', (socket) => {
            const session = socket.handshake.session;
            // console.log('New WebSocket connection');
            const superadmin = session.superadmin;
            if (superadmin) {
                console.log('SuperAdmin connected');
                return superHandler(socket, superadmin);
            }
            const sellerId = session.sellerId;
            if (sellerId) {
                // console.log('Seller connected');
                return sellerHandler(socket, sellerId);
            }
        });

        // Add close event listener
        io.on('close', () => {
            console.log('WebSocket server is closing');
            // Additional logic or cleanup can be added here
        });
    }
}

module.exports = WS_Server;
    const mongo = require("../db");
    const ServerConfig = require("../ServerConfig");

    const limitCat = ServerConfig.limit.categories;

    module.exports = function catGet(req, res) {

        let { skip, getAll } = req.body;

        let facet = {};
        facet.count = [{ $count: "count" }];
        facet.cats = [];
        facet.cats.push({
            $sort: {
                time: -1
            }
        })
        if(skip){
            facet.cats.push({
                $skip: skip
            })
        }
        if(!getAll){
            facet.cats.push({
                $limit: limitCat
            })
        }
        mongo.cats.aggregate([
            {
                $facet: facet
            }
        ], (err, info) => {
            if (err) {
                res.send(null)
                return false
            }

            info = info[0]; //get returned object
            let endCats;
            let count = (info.count[0] && info.count[0].count) || 0;
            if (count <= ((skip || 0) + limitCat)) { //set endCats to true if reached limit
                endCats = true;
            }

            let array = info.cats;
            res.send({
                ok: true,
                array,
                endCats
            })
        })

    }
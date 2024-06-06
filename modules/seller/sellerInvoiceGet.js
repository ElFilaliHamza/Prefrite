
const mongo = require("../db");
const ServerConfig = require("../ServerConfig");
const ServerUtils = require("../ServerUtils");

const invoiceLimit = ServerConfig.limit.invoice;
const oneDay = 1000 * 60 * 60 * 24;

module.exports = async function sellerInvoiceGet(req, res) {
    const sellerId = req.session.sellerId;
    if (!sellerId) {
        return res.send({ access: false });
    }

    let { skip, filter } = req.body;

    if (!skip) {
        skip = 0;
    }

    const toMatch = {
        sellerId: sellerId
    };
    const invoicePipeline = [];

    //filter paid and not paid
    let { state } = (filter = filter || {});
    if (state) {
        switch (state) {
            case "paid": {
                toMatch[`$expr`] = {
                    $eq: ["$total", "$paid"]
                }
                break;
            }
            case "not_paid": {
                toMatch[`$expr`] = {
                    $gt: ["$total", "$paid"]
                }
                break;
            }
            default: {

            }
        }
    }


    //sort by client name || ice
    if (filter.name) {
        const clientIds = await new Promise(resolve => {
            mongo.clients.find({
                name: ServerUtils.secureAndConvertStringToRegex(filter.name, ["i"]),
            }, {
                _id: 1
            }, (err, data) => {
                resolve((err ? [] : data.map(x => x._id.toString())));
            })
        });
        toMatch[`client._id`] = {
            $in: clientIds
        }
    } else if (filter.ice) {
        toMatch[`client.ice`] = filter.ice;
    }

    //filter by date //sort by the nearest date
    if (filter.date) {
        let startTime = ServerUtils.htmlDateToTime(filter.date);
        let endTime = ServerUtils.htmlDateToTime(filter.date, false);
        toMatch['time'] = {
            $gte: startTime,
            $lt: endTime
        }
    } 
    invoicePipeline.push(
        {
            $sort: {
                time: -1
            }
        }
    );

    /* //filter by date //sort by the nearest date
    if (filter.date) {
        let date = new Date(filter.date);
        date.setHours(12);
        date.setMinutes(0);
        date.setSeconds(0);
        let sortTime = date.getTime();
        invoicePipeline.push(
            {
                $addFields: {
                    difference: {
                        $abs: {
                            $subtract: [sortTime, "$time"]
                        }
                    }
                }
            }
        );

        invoicePipeline.push(
            {
                $sort: {
                    difference: 1
                }
            }
        );
    } else {
        invoicePipeline.push(
            {
                $sort: {
                    time: -1
                }
            }
        );
    } */

    invoicePipeline.push(
        {
            $skip: skip
        }
    );

    invoicePipeline.push(
        {
            $limit: invoiceLimit
        }
    );
    mongo.invoice.aggregate([
        {
            $match: toMatch
        }, {
            $facet: {
                count: [{ $count: "count" }],
                invoices: invoicePipeline
            }
        }
    ], (err, info) => {
        if (err) {
            res.send(null)
            return false
        }
        info = info[0]; //get returned object
        let endInvoice;
        let count = (info.count[0] && info.count[0].count) || 0;
        if (count <= (skip + invoiceLimit)) { //set endInvoice to true if reached limit
            endInvoice = true;
        }
        let invoices = info.invoices;
        res.send({
            invoices,
            endInvoice
        });
    });
}
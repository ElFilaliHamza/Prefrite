const checkSession = (req, res) => {
    let superadmin = req.session.superadmin;
    console.log(req.session);
    if(superadmin){
        return res.send({
            logged: true,
            route: "superadmin"
        })
    }

    let admin = req.session.admin;
    if(admin){
        return res.send({
            logged: true,
            route: "admin"
        })
    }

    let sellerId = req.session.sellerId;
    if(sellerId){
        return res.send({
            logged: true,
            route: "seller"
        })
    }

    let magasin = req.session.magasin;
    if(magasin){
        return res.send({
            logged: true,
            route: "magasin"
        })
    }

    res.send({
        logged: false,
    })
}

module.exports = checkSession;
const db = require("../data/connection.js");

module.exports = {
    all,
    add,
    remove
};

function all() {
    return db("dealerships");
}

function add(dealership) {
    return db("dealerships")
        .insert(dealership, 'id')
        .then(ids => {
            const [id] = ids;
            return getById(id)
        })
}

function getById(id) {
    return db("dealerships")
        .where({id})
        .first()
}

function remove(id) {
    return db("dealerships")
        .where({id})
        .del()
}
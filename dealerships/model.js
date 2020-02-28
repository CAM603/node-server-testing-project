const db = require("../data/connection.js");

module.exports = {
    all,
};

function all() {
    return db("dealerships");
}

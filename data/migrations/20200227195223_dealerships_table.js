
exports.up = function(knex) {
    return knex.schema.createTable('dealerships', table => {
        table.increments();

        table
            .string('name', 225)
            .notNullable()
            .unique()
            .index()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('dealerships')
};

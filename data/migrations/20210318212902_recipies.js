
exports.up = function(knex) {
  return knex.schema
    .createTable('recipe', tbl => {
      tbl.increments('recipe_ID')
      tbl.string('recipe_name', 255).notNullable().unique()
      tbl.timestamp('recipe_createdAt', { precision: 6 }).defaultTo(knex.fn.now(6))
    })
    .createTable('steps', tbl => {
      tbl.increments('steps_ID')
      tbl.integer('steps_number')
      tbl.string('steps_instructions', 255).notNullable()
    })
    .createTable('ingredients', tbl => {
      tbl.increments('ingredients_ID')
      tbl.string('ingredients_Name').notNullable()
    })
    .createTable('step_ingredients', tbl => {
      tbl.increments('steps_ingredients_ID')
      tbl.integer('steps_ID')
        .unsigned()// cant be negetive
        .notNullable()
        .references('steps_ID')
        .inTable('steps')
        .onDelete("RESTRICT") //CASECADE
      tbl.integer('ingredients_ID')
        .unsigned()
        .notNullable()
        .references('ingredients_ID')
        .inTable('ingredients')
        .onDelete("RESTRICT")
    })
}; 

exports.down = function(knex) {
  return knex.schema
    .createTable('step_ingredients')
    .createTable('ingredients')
    .createTable('steps')
    .createTable('recipe')
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {recipe_ID: 1, recipe_name: 'Chicken Wings', recipe_createdAt: '3-17-2021'},
        {recipe_ID: 2, recipe_name: 'Apple Pie', recipe_createdAt: '3-18-2021'},
        {recipe_ID: 3, recipe_name: 'Burger', recipe_createdAt: '3-16-2021'}
      ]);
    });
};

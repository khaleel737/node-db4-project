exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments("recipe_id");
      tbl.string("recipe_name", 256).notNullable();
      tbl.date("created_at")
    })
    .createTable("steps", (stp) => {
      stp.integer("step_id");
      stp.integer("step_number").notNullable();
      stp.string("step_instructions", 256).notNullable()
      stp.specificType('ingredients', 'INT[]')
    })
    .createTable("ingredients", (ing) => {
        ing.integer("ingredient_id")
      ing
        .string("ingredient_name")
        .notNullable()
        ing.integer("quantity").notNullable()
    //   ing.primary(["recipe_id", "ingredient_id"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
};

//   {
//     "recipe_id" : 1,
//     "recipe_name": "Spaghetti Bolognese",
//     "created_at": "2021-01-01 08:23:19.120",
//     "steps": [
//       {
//         "step_id": 11,
//         "step_number": 1,
//         "step_instructions": "Put a large saucepan on a medium heat",
//         "ingredients": []
//       },
//       {
//         "step_id": 12,
//         "step_number": 2,
//         "step_instructions": "Add 1 tbsp olive oil",
//         "ingredients": [
//           { "ingredient_id": 27, "ingredient_name": "olive oil", "quantity": 0.014 }
//         ]
//       },
//     ]
//   }
//   ```

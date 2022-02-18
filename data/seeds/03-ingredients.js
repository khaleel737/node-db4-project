
exports.seed = function(knex, Promise) {
    return knex('ingredients').insert([
      // species_id must match valid species
      { ingredient_id: 1, ingredient_name: "tomatos", quantity: 0.23 },
      { ingredient_id: 2, ingredient_name: "olives", quantity: 0.3  },
      { ingredient_id: 3, ingredient_name: "oil", quantity: 1.23  },
      { ingredient_id: 4, ingredient_name: "pepper", quantity: 4  },
      { ingredient_id: 5, ingredient_name: "eggs", quantity: 1.378  },
      { ingredient_id: 6, ingredient_name: "flour", quantity: 4.55  },
      { ingredient_id: 7, ingredient_name: "wheat", quantity: 0.23  },
      { ingredient_id: 8, ingredient_name: "marshmellows", quantity: 0.3  }
    ]);
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

exports.seed = function(knex, Promise) {
    return knex('recipes').insert([   
      { recipe_name: 'Pasta', created_at: new Date()  },
      { recipe_name: 'Lasagna', created_at: new Date()  },
      { recipe_name: 'Hamburger', created_at: new Date() },
      { recipe_name: 'Schnetzel', created_at: new Date()  },
      { recipe_name: 'egg omelete', created_at: new Date()  },
      { recipe_name: 'beef jerky', created_at: new Date()  },
      { recipe_name: 'pizza', created_at: new Date()  },
      { recipe_name: 'malfouf', created_at: new Date()  },
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
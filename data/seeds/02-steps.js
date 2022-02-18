
exports.seed = function(knex, Promise) {
    return knex('steps').insert([
      { step_number: 1, step_instructions: 'hello mamamia', ingredients: [] }, 
      { step_number: 2, step_instructions: 'banana yimyim', ingredients: []}, 
      { step_number: 5, step_instructions: 'marshmewwww dada', ingredients: []  }, 
      { step_number: 11, step_instructions: 'put a pan in it', ingredients: []  },
      { step_number: 4, step_instructions: 'doordash', ingredients: []  }, 
      { step_number: 3, step_instructions: 'papa johns', ingredients: []  }, 
      { step_number: 9, step_instructions: 'pizza hut', ingredients: []  }, 
      { step_number: 7, step_instructions: 'burger king', ingredients: []  }
    ]);
  };
  

  // {
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
const express = require('express')

const Router = express.Router()

// DO YOUR MAGIC



Router.get('/', async (req, res, next) => {
  try{
    const allCars = await Cars.getAll()
    res.status(200).json(allCars)
  }catch(err){
    next(err)
  }
})

Router.get('/:id', async (req, res, next) => {
    try{
      const carsID = await Cars.getById(req.params.id)
      res.json(carsID)
    }catch(err){
      next(err)
    }
  })



Router.post('/', async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const insertCar = await Cars.create(req.body)
    res.status(201).json(insertCar)
  } catch (err) {
    next(err)
  }
  })


Router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 201).json(err)
})

module.exports = Router;

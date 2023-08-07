const express = require('express')

const routes = express.Router()

const tripdetails = require('../controllers/trip.controller')

routes.post('/', tripdetails.tripAdditionController)
routes.get('/', tripdetails.getTripDetailsController)
routes.get('/:id', tripdetails.getTripDetailsByIdController)

module.exports = routes
const express = require('express')

const routes = express.Router()

const tripdetails = require('../controllers/trip.controller')

routes.post('/', tripdetails.tripAdditionController)

module.exports = routes
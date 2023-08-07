const tripModel = require('../models/trip.models')

async function tripAdditionController(req, res){
    console.log(req.body)
    try {
        let tripDetail = tripModel.Trip({
            tripName: req.body.tripName,
            startDateOfJourney: req.body.startDateOfJourney,
            endDateOfJourney: req.body.endDateOfJourney,
            nameOfHotels: req.body.nameOfHotels,
            placesVisited: req.body.placesVisited,
            totalCost: req.body.totalCost,
            tripType: req.body.tripType,
            experience:req.body.experience,
            image: req.body.image,
            shortDescription: req.body.shortDescription,
            featured: req.body.featured,
            createdAt: req.body.createdAt
        })

        await tripDetail.save()
        res.send('Trip Added Successfully')
    } catch (error) {
        console.log('Error')
        res.send('Something went wrong')
    }
}


module.exports = {tripAdditionController}
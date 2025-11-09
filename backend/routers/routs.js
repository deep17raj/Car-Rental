import express from 'express'
import { getCars } from '../controller/carController.js';
const router = express.Router()

//post request
// router.post('/save/driver',createDriver);
// router.post('/save/car',createCar);
// router.post('/save/price',createPrice);
// router.post('save/customers',createCustomer);
// router.post('/save/bookings',createBookings);
// router.post('save/commision',saveCommision);
// router.post('save/devcommision',saveDevcommision);

//delete request

//update request


//getrequest
router.get('/get/cars',getCars);

// router.get('/get/cars/:location')
export default router;
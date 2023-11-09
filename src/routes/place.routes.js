const { Router } = require('express');
const placeRouter = Router();

const getPlaceHandler = require('../handler/getPlaceHandler');
const createPlaceHandler = require('../handler/createPlaceHandler');
const deletePlaceHandler = require('../handler/deletePlaceHandler');
const updatePlaceHandler = require('../handler/updatePlaceHandler');

const {
    validateAdressPlace,
    validateNamePlace,
    validateThemePlace,
    validateUserIdPost,
    validateUserIdGet,
    validateId
} = require('../utils/middleware');

placeRouter.get('/getPlace', [validateUserIdGet], getPlaceHandler);
placeRouter.post('/createPlace', [validateNamePlace, validateAdressPlace, validateThemePlace, validateUserIdPost], createPlaceHandler);
placeRouter.delete('/deletePlace', [validateUserIdPost, validateId], deletePlaceHandler);
placeRouter.put('/updatePlace', validateId, updatePlaceHandler);

module.exports = placeRouter;
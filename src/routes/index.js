const { Router } = require('express');
const router = Router();
const userRouter = require('./user.routes');
const placeRouter = require('./place.routes');

router.use('/user', userRouter);
router.use('/place', placeRouter);

module.exports = router;
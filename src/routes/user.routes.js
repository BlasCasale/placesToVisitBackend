const { Router } = require('express');
const userRouter = Router();

const createUserHandler = require('../handler/createUserHandler');
const getUserHandler = require('../handler/getUserHandler');
const deleteUserHandler = require('../handler/deleteUserHandler');

const {
    validateLastNamePost,
    validateMailGet,
    validateMailPost,
    validateNamePost,
    validatePasswordGet,
    validatePasswordPost
} = require('../utils/middleware');

userRouter.get('/getUser', [validateMailGet, validatePasswordGet], getUserHandler);
userRouter.post('/createUser', [validateNamePost, validateLastNamePost, validateMailPost, validatePasswordPost], createUserHandler);
userRouter.delete('/deleteUser', validateMailGet, deleteUserHandler);

module.exports = userRouter;
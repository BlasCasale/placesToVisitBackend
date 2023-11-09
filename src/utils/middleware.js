const { regExp, regExp_mail, regExp_password } = require('../utils/const');

// todos los middleware y sus validaciones para evitar que entren mal los datos o que faltan

// no se testean los middleware debido a que estos mismos estan implementados en los test

const validateNamePost = (req, res, next) => {
    const { name } = req.body;
    if (!name) throw new Error('Por favor envie su nombre.');

    if (!regExp.test(name)) throw new Error('Solo puede contener letras.');
    next();
};

const validateLastNamePost = (req, res, next) => {
    const { last_name } = req.body;
    if (!last_name) throw new Error('Por favor envie su apellido.');

    if (!regExp.test(last_name)) throw new Error('Solo puede contener letras.');
    next();
};

const validateMailPost = (req, res, next) => {
    const { mail } = req.body;
    if (!mail) throw new Error('Por favor envie su mail.');

    if (!regExp_mail.test(mail)) throw new Error('Envie un mail válido.');
    next();
};

const validateMailGet = (req, res, next) => {
    const { mail } = req.query;
    if (!mail) throw new Error('Por favor envie su mail.');

    if (!regExp_mail.test(mail)) throw new Error('Envie un mail válido.');
    next();
};

const validatePasswordGet = (req, res, next) => {
    const { password } = req.query;
    if (!password) throw new Error('Por favor envie una contraseña.');

    if (!regExp_password.test(password)) throw new Error('Envie una contraseña válida');
    next();
};

const validatePasswordPost = (req, res, next) => {
    const { password } = req.body;
    if (!password) throw new Error('Por favor envie una contraseña.');

    if (!regExp_password.test(password)) throw new Error('Envie una contraseña válida.');
    next();
};

const validateNamePlace = (req, res, next) => {
    const { name } = req.body;
    if (!name) throw new Error('Por favor envie un nombre.');

    next();
};


const validateAdressPlace = (req, res, next) => {
    const { adress } = req.body;
    if (!adress) throw new Error('Por favor envie una dirección.');

    next();
};

const validateThemePlace = (req, res, next) => {
    const { theme } = req.body;
    if (!theme) throw new Error('Por favor envie una temática.');

    if (!regExp.test(theme)) throw new Error('Envie una temática válida.');
    next();
};

const validatePricePlace = (req, res, next) => {
    const { price } = req.body;
    if (typeof price !== "number" || price === null) throw new Error('Por favor envie un precio en números.');

    next();
};

const validateUserIdPost = (req, res, next) => {
    const { UserId } = req.body;
    if (!UserId) throw new Error('Por favor envie el ID del usuario.');

    next();
};

const validateUserIdGet = (req, res, next) => {
    const { UserId } = req.query;
    if (!UserId) throw new Error('Por favor envie el ID del usuario.');

    next();
};

const validateId = (req, res, next) => {
    const { id } = req.body;
    if (!id) throw new Error('Por favor envie el ID del lugar a eliminar.');

    next();
};

module.exports = {
    validateNamePost,
    validateLastNamePost,
    validateMailGet,
    validateMailPost,
    validatePasswordGet,
    validatePasswordPost,
    validateNamePlace,
    validateAdressPlace,
    validateThemePlace,
    validatePricePlace,
    validateUserIdPost,
    validateUserIdGet,
    validateId
};
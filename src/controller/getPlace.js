const { Place } = require('../db');

const getPlace = async (UserId) => {

    const place = await Place.findAll({ where: { UserId } });

    return place;
};

module.exports = getPlace;
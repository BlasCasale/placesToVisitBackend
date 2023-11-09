const { Place } = require('../db');
const { Op } = require('sequelize');

const deletePlace = async (data) => {
    const { UserId, id } = data;

    const place = await Place.findOne({ where: { [Op.and]: [{ UserId }, { id }] } });
    if (!place) throw Error('Por favor envie la información necesaria.');

    const aux = place;
    await place.destroy();
    return aux;
};

module.exports = deletePlace;
const { Place } = require('../db');

const updatePlace = async (data) => {
    const { name, adress, district, price, theme, image, review, visited, socialMedia, id } = data;

    const updatedPlace = await Place.update({ name, adress, district, price, theme, image, review, visited, socialMedia },
        { where: { id } }
    );

    return updatedPlace;
};

module.exports = updatePlace;
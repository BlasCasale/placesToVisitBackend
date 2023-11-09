const { Place } = require('../db');

const createPlace = async (data) => {
    const { name, adress, district, price, theme, image, review, visited, socialMedia, UserId } = data;

    const place = await Place.create({ name, adress, district, price, theme, image, review, visited, socialMedia });

    await place.setUser(UserId);

    return place;
};

module.exports = createPlace;
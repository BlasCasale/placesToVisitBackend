const createPlace = require('../controller/createPlace');

const createPlaceHandler = async (req, res) => {
    try {
        const { name, adress, district, price, theme, image, review, visited, socialMedia, UserId } = req.body;
        const place = await createPlace({ name, adress, district, price, theme, image, review, visited, socialMedia, UserId });
        res.status(201).json(place);
    } catch (error) {
        res.status(502).send({ error: error.message });
    };
};

module.exports = createPlaceHandler;
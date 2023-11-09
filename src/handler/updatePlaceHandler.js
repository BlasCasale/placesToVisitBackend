const updatePlace = require('../controller/updatePlace');

const updatePlaceHandler = async (req, res) => {
    try {
        const { name, adress, district, price, theme, image, review, visited, socialMedia, id } = req.body;
        const updatedPlace = await updatePlace({ name, adress, district, price, theme, image, review, visited, socialMedia, id });
        res.status(201).json(updatedPlace);
    } catch (error) {
        res.status(502).send({ error: error.message });
    };
};

module.exports = updatePlaceHandler;
const getPlace = require('../controller/getPlace');

const getPlaceHandler = async (req, res) => {
    try {
        const { UserId } = req.query;
        const places = await getPlace(UserId);
        res.status(200).json(places);
    } catch (error) {
        res.status(404).send({ error: error.message });
    };
};

module.exports = getPlaceHandler;
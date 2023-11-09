const deletePlace = require('../controller/deletePlace');

const deletePlaceHandler = async (req, res) => {
    try {
        const { UserId, id } = req.body;
        const place = await deletePlace({ UserId, id });
        res.status(200).json(place);
    } catch (error) {
        res.status(502).send({ error: error.message });
    };
};

module.exports = deletePlaceHandler;
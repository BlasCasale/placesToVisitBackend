const getUser = require('../controller/getUser');

const getUserHandler = async (req, res) => {
    try {
        const { mail, password } = req.query;
        const user = await getUser({ mail, password });
        res.status(200).json(user);
    } catch (error) {
        res.status(502).send({ error: error.message });
    };
};

module.exports = getUserHandler;
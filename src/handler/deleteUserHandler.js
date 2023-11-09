const deleteUser = require('../controller/deleteUser');

const deleteUserHandler = async (req, res) => {
    try {
        const { mail } = req.query;
        const deletedUser = await deleteUser(mail);
        res.status(201).json(deletedUser);
    } catch (error) {
        res.status(404).send({ error: error.message });
    };
};

module.exports = deleteUserHandler;
const createUser = require('../controller/createUser');

const createUserHandler = async (req, res) => {
    try {
        const { name, last_name, mail, password } = req.body;
        const user = await createUser({ name, last_name, mail, password });
        res.status(201).json(user);
    } catch (error) {
        res.send({ error: error.message })
    }
};

module.exports = createUserHandler;
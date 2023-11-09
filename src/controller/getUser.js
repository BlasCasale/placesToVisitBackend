const { User } = require('../db');
const hashFunction = require('../utils/hashFunction');

const getUser = async (data) => {
    const { mail, password } = data;

    const user = await User.findOne({ where: { mail } })

    if (!user) throw Error('No existe un usuario registrado con este mail.');

    const hashedPassword = hashFunction(password, user.name);

    if (hashedPassword === user.password) return user;
    else throw Error('El usuario y contraseña no coinciden.');
};

module.exports = getUser;
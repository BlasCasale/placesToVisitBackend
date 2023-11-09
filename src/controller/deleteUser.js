const { User } = require('../db');

const deleteUser = async (mail) => {
    const user = await User.findOne({ where: { mail } });
    if (!user) throw new Error('No existe un usuario registrado con este mail.');
    
    const aux = user;
    await user.destroy();
    return aux;
};

module.exports = deleteUser;
Explicacióon del proyecto:

Durante este proyecto se crea un servidor web para una aplicación que los usuarios pueden registrarse y pueden crear sus lugares que quieran visitar, luego pueden editar esos lugares guardados como asi también eliminarlos. Los usuarios registrados y creados seran almacenados en una base de datos de postgre que tiene un deploy hecho en RailWay, como también seran almacenados mediante el UserId y el id de los lugares creados en una tabla intermedia de los lugares de todos los usuarios. Dentro de los routes se utilizan middlewares que fueron creados en el archivo middleware.js, que son validadores de lo que deberia entrar a cada uno de los handlers, esto fue hecho de esta manera para evitar cargarle de la lógica de validación a los handlers y también por cuestiones de prolijidad del código. También teniendo en cuenta que en las base de datos reales no se guarda información sensible de manera plana, hice una pequeña función que me hashee la contraseña que ingresa el usuario, previamente a ser guardada. Para cuando el usuario intenta acceder a su cuenta, esa contraseña ingresada nuevamente es hasheada y comparada con la que ya fue almacenada en la base de datos.

Tecnologías y dependencias utilizadas:

JavaScript NodeJS Express

. Desarrollo:

1) Jest
2) Supertest
3) Morgan
4) Nodemon

. Producción:

1) Express
2) Cors
3) Dotenv
4) Cross-env
5) Sequelize
6) Pg
7) Pg-hstore
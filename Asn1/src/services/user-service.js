const database = require('../configs/db');
const bcrypt = require('bcrypt');
const ApiError = require('../exceptions/api-error');
const validation = require('../utils/validation');

class UserService {
    async registration(firstName, lastName, login, password) {
        await database.query(
            'insert into users(first_name, last_name, login, password) values($1, $2, $3, $4)',
            [firstName, lastName, login, password]
        );
    }
}

module.exports = new UserService();
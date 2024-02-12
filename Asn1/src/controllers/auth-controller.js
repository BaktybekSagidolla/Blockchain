const userService = require('../services/user-service');

class AuthController {

    constructor() {
        this.userService = userService;
        this.registration = this.registration.bind(this);
    }

    async registration(req, res, next) {
        try {
            const { firstName, lastName, login, password } = req.body;
            await this.userService.registration(firstName, lastName, login, password);
            res.status(200).json({ message: 'Registration successful' });
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new AuthController();
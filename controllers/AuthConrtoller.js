import db from "../config/db.js";
import Validation from "../utils/validation.js";
import UserService from "../services/UserService.js";
import PasswordEnctyptor from "../utils/passwordEnctyptor.js";

const OK = 200
const CONFLICT_ERROR = 409
const NOT_FOUND_ERROR = 404
const BAD_REQUEST = 400

class AuthConrtoller {
    async createUser(req, res) {
        const {username, password} = req.body

        if (await Validation.usernameValidation(username)) {
            console.error(`(${CONFLICT_ERROR}) Error: User with username ${username} is already exists`)
            return res.status(CONFLICT_ERROR).json({error: `User with username ${username} is already exists`})
        }

        await UserService.registration(username, password)
        console.log(`(${OK}) Registration successful: ${username}`)
        return res.json({message: "Registration successful!"})
    }

    async login(req, res) {
        const {username, password} = req.body
        const user = await UserService.findByUsername(username)

        if (!user) {
            console.error(`(${NOT_FOUND_ERROR}) Error: User ${username} is not exists`)
            return res.status(NOT_FOUND_ERROR).json({message: "User is not exists"})
        }

        const passwordIsMatch = await PasswordEnctyptor.compare(password, user.password)

        if (passwordIsMatch) {
            console.log(`(${OK}) Login successful: ${username}`)
            return res.status(OK).json({message: "Login successful"})
        } else {
            return res.status(BAD_REQUEST).json({message: 'Invalid credentials'});
        }

    }

    async getUsers(req, res) {
        const users = await UserService.findAll()
        return res.status(200).send(users)
    }

    async getUserById(req, res) {
        const {id} = req.params
        const user = await UserService.findById(id)
        return res.status(200).send(user)
    }
}

export default new AuthConrtoller()
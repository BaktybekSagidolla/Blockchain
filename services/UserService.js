import db from "../config/db.js";
import PasswordEnctyptor from "../utils/passwordEnctyptor.js";



class UserService {
    async registration(username, password) {
        const encryptedPassword = await PasswordEnctyptor.encryptPassword(password)
        await db.query(`INSERT INTO users (username, password) values ($1, $2) RETURNING *`,
            [username, encryptedPassword])

    }

    async findAll() {
        const result = await db.query("SELECT * FROM users")
        return result.rows[0]
    }

    async findById(id) {
        const res = await db.query("SELECT * FROM users WHERE id=$1", [id])
        return res.rows[0]
    }

    async findByUsername(username) {
        const res = await db.query("SELECT * FROM users WHERE username=$1", [username])
        return res.rows[0]
    }
}

export default new UserService()
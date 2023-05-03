import { pool } from '../database/connection.js';

const fetchUser = async (req, res, next) => {
    if (req.session.userId) {
        try {
            const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [req.session.userId]);
            req.user = rows[0];
            res.locals.user = req.user;
        } catch (error) {
            console.error(error);
        }
    }
    next();
};

export default fetchUser;

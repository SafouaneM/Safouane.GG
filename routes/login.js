import express from 'express';
import { pool } from '../database/connection.js';
import bcrypt from 'bcrypt';

const router = express.Router();

router.get('/login', (req, res) => {
    res.render("login")
});

router.post('/login', async (req, res) => {
    const {email, password} = req.body;

    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        const user = rows[0]

        if (!user) {
            return res.status(400).send('Invalid email or password')
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(400).send('invalid email or password')
        }

        req.session.userId = user.id
        res.redirect('/summoner')


    } catch (error) {
        console.error(error)
        res.status(500).send('error loggin in')
    }
});

export default router;

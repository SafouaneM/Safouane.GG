import express from 'express';
import { pool } from '../database/connection.js';
import bcrypt from 'bcrypt';

const router = express.Router();

router.get('/register', (req, res) => {
    res.render('register');

});

router.post('/register', async (req, res) => {
    const {nickname, email, summoner_name, discord_tag, password} = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    try {
        const result = await pool.query('INSERT INTO users (nickname, email, summoner_name, discord_tag, password) VALUES (?,?,?,?,?)', [nickname, email, summoner_name, discord_tag, passwordHash]);
        console.log('User registered successfully');
        res.redirect('/login');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error registering user');
    }
});

export default router;

import {pool} from '../database/connection.js';

const auth = (req, res, next) => {
    if (req.session && req.session.userId) {
        pool.query('SELECT * FROM users WHERE id = ?', [req.session.userId])
            .then(([rows]) => {
                req.user = rows[0];
                next();
            })
            .catch((error) => {
                console.error(error);
                res.status(500).send('Error fetching user data');
            });
    } else {
        res.status(401).json({ message: 'Unauthorized access' });
    }
};

export default auth;
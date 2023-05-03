import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const router = express.Router();

router.get('/offline', (req, res) => {
    res.sendFile('offline.html', { root: path.join(__dirname, '..', 'public') });
});

export default router;

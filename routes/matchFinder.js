import express from 'express';
import auth from '../middlewares/auth.js';
import fetchUser from '../middlewares/fetchUser.js';
import {pool} from '../database/connection.js';
import {getSummonerIconInfoBySummonerName} from '../models/getSummonerData.js';

const router = express.Router();

router.get('/room/:id', auth, fetchUser, async (req, res) => {
    const userId = req.user.id;
    const roomId = req.params.id;

    const [roomRows] = await pool.query('SELECT * FROM rooms WHERE id = ?', [roomId]);
    if (roomRows.length === 0) {
        return res.status(404).json({error: 'Room not found'});
    }

    // Fetch posts for the specified room
    const [rows] = await pool.query(`
        SELECT posts.*,
               users.nickname,
               users.summoner_name,
               (SELECT COUNT(*) FROM post_likes WHERE post_likes.post_id = posts.id)                            as like_count,
               (SELECT COUNT(*)
                FROM post_likes
                WHERE post_likes.post_id = posts.id
                  AND post_likes.user_id = ?)                                                                   as user_liked
        FROM posts
                 JOIN users ON users.id = posts.user_id
        WHERE room_id = ?
        ORDER BY posts.created_at DESC
    `, [userId, roomId]);

    // Fetch summoner icons for all posts
    for (let post of rows) {
        const iconInfo = await getSummonerIconInfoBySummonerName(post.summoner_name);
        if (iconInfo) {
            post.summonerIconId = iconInfo.summonerIconId;
        } else {
            console.error(`Error: Could not fetch summonerIcon for summonerName: ${post.summoner_name}`);
        }
    }

    res.render('match-finder', {posts: rows, roomId: roomId});
});


router.post('/create-room', auth, fetchUser, async (req, res) => {
    const { roomName, isPrivate, roomPassword, size } = req.body;
    const invitees = req.body.invitees; // Change this line
    try {
        const [result] = await pool.query('INSERT INTO rooms (name, is_private, password, size, creator_id) VALUES (?, ?, ?, ?, ?)', [roomName, isPrivate, roomPassword, size, req.user.id]);
        const roomId = result.insertId;

        for (const invitee_id of invitees) {
            await pool.execute(
                'INSERT INTO room_invitations (room_id, inviter_id, invitee_id, status, created_at) VALUES (?, ?, ?, "pending", NOW())',
                [roomId, req.user.id, invitee_id]
            );
        }
        res.status(201).json({ roomId });
    } catch (error) {
        console.error('Error creating room:', error);
        res.status(500).json({ error: 'Error creating room' });
    }
});

router.get('/fetch-invitations', auth, fetchUser, async (req, res) => {
    try {
        const [rows] = await pool.query(`
            SELECT room_invitations.*, rooms.name as room_name, users.nickname as inviter_nickname
            FROM room_invitations
                     JOIN rooms ON rooms.id = room_invitations.room_id
                     JOIN users ON users.id = room_invitations.inviter_id
            WHERE room_invitations.invitee_id = ?
              AND room_invitations.status = 'pending'
        `, [req.user.id]);

        res.json(rows);

    } catch (error) {
        console.error('Error fetching invitations:', error);
        res.status(500).json({error: 'Error fetching invitations'});
    }
});


router.get('/search_users', async (req, res) => {
    const searchQuery = req.query.q;

    const searchUsers = async (searchQuery) => {
        const query = `
            SELECT id, nickname, email
            FROM users
            WHERE nickname LIKE ?
               OR email LIKE ?
            LIMIT 10
        `;
        const [rows] = await pool.execute(query, [`%${searchQuery}%`, `%${searchQuery}%`]);
        return rows;
    };

    const users = await searchUsers(searchQuery);
    res.json(users);
});


export async function getAllRooms() {
    const [rows] = await pool.query('SELECT * FROM rooms');
    return rows;

}

export default router;

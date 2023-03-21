import express from 'express'
const app = express();

import summonerRoutes from './routes/summoners/summonerRoutes.js'
import expressLayouts from "express-ejs-layouts";

import { URL } from 'url'; // in Browser, the URL in native accessible on window
const __dirname = new URL('.', import.meta.url).pathname;


app.use('/css', express.static(__dirname + 'public/css'))

app.use(expressLayouts)
app.set('view engine', 'ejs')

app.get('', (req,res) => {
    res.render('index')
})
app.use(summonerRoutes);

export default app

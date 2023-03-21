import app from './app.js'
import express from "express";
const PORT = process.env.PORT || 3000;


app.use(express.static('public'))


app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
})

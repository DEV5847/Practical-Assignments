const express = require('express');
const app = express();
const axios = require('axios');

const API_KEY = '35aee073-557b-4c42-8e1f-389e0cd6edc8';

// Function to fetch live cricket scores
async function getLiveCricketScore() {
    try {
        const response = await axios.get(
            `https://api.cricapi.com/v1/cricScore?apikey=${API_KEY}`
        );
        return response.data;
    } catch (error) {
        throw new Error('Error fetching live cricket scores: ' + error.message);
    }
}
app.get('/live-score', async (req, res) => {
    try {
        const liveScore = await getLiveCricketScore();
        // console.log(liveScore);
        res.status(200).send(liveScore);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
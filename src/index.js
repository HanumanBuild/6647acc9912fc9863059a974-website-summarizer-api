require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const axios = require('axios');
const cheerio = require('cheerio');

app.post('/summarize', async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    // Fetch the website content
    const response = await axios.get(url);
    const html = response.data;

    // Parse the HTML using Cheerio
    const $ = cheerio.load(html);
    const text = $('body').text().replace(/\s+/g, ' ').trim();

    // Use the OpenAI API to summarize the text
    const openaiResponse = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Summarize the following text: ${text}`,
      max_tokens: 100,
    });

    const summary = openaiResponse.data.choices[0].text.trim();

    // Return the summary
    res.json({ summary });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch or parse the website content' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
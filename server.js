const express = require('express');
const app = express();

app.get('/api/predictions', (req, res) => {
  res.json({ score: 75, direction: 'buy', confidence: 80 });
});

app.listen(3000, () => console.log('Server is running'));

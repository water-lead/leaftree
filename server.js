const express = require('express');
const bodyParser = require('body-parser');
// ... any other required imports ...

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));  // If 'public' is the directory containing your HTML, JS, and CSS

app.post('/api/analyze', async (req, res) => {
    // Here, you can call the function from engine.ts
    const result = await POST(req);
    res.json(result);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

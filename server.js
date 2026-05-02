require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ── Validate API key on startup ──────────────────────────────────────────────
if (!process.env.ANTHROPIC_API_KEY) {
  console.error('ERROR: ANTHROPIC_API_KEY is not set.');
  console.error('Copy .env.example to .env and add your key.');
  process.exit(1);
}

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(express.json());
app.use(express.static(path.join(__dirname, 'agent')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'agent', 'sysadmin-agent.html'));
});

// ── Proxy route ───────────────────────────────────────────────────────────────
// The browser calls /api/chat — this server attaches the API key and
// forwards the request to Anthropic. The key never reaches the browser.
app.post('/api/chat', async (req, res) => {
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();

    // Forward any API errors back to the client cleanly
    if (!response.ok) {
      return res.status(response.status).json({
        error: data.error?.message || 'Anthropic API error'
      });
    }

    res.json(data);
  } catch (err) {
    console.error('Proxy error:', err.message);
    res.status(500).json({ error: 'Server error — check your terminal for details.' });
  }
});

// ── Start ─────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`SysAdmin Agent running at http://localhost:${PORT}`);
});

const express = require('express');

const app  = express();
const PORT = 1337;

app.use(express.json());

app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));


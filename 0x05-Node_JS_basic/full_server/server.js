const express = require('express');
const customRouter = require('./routes/index');

const app = express();
app.use('/', customRouter);

app.listen(1245);

export default app;

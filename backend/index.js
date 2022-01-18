const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');
const path = require('path');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routesHandler);


app.use(express.static(path.join('./build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join('./build', 'index.html'));
});
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

const PORT = process.env.PORT||4000; // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

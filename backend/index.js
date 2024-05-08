const catalogue = require('./catalogue.json');

const app = require('express')();
const port = 3000;

var cors = require('cors');

// use it before all route definitions
app.use(cors({origin: 'http://localhost:4200'}));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });

app.get('/api/catalogue', (req, res) => {
    res.json(catalogue
    );
});
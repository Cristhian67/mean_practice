require('./database');

const app = require('./app');

const port = app.get('port');

app.listen(port);
console.log("server on port " + port);
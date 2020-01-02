const app = require('./app');
const server = require('http').createServer(app);

const PORT = process.env.PORT || 3090;

server.listen(PORT, err => {
    if (err) {
        console.err(err);
        process.exit(1);
    }
    console.log('server listening on port' + PORT);
});

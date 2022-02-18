const server = require('./api/server')

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is up on ${PORT} ${new Date()}`)
})
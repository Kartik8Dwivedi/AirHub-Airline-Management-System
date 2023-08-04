const express = require('express')
require('dotenv').config()

const setupAndStartserver = async () => {
    const app = express();
    app.listen(3000, () => {
        console.log(`Server started at ${process.env.PORT}`)
    })
}
setupAndStartserver()
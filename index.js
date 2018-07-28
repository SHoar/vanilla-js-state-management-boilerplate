const express = require('express')
const port = process.env.PORT
const app = express()

app.use(express.static('public'))


app.listen(port, () => {
  console.info(`Server is running on ${port}`)
})

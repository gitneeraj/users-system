import express from "express";
import dotenv  from "dotenv"

dotenv.config()
const app = express()
const PORT = process.env.PORT || 4000

app.use('/', (_, res) => {
    return res.status(401).send('Unauthorized Access')
})

app.listen(PORT, () => {
   console.log(`Server running at port ${PORT}`) 
})


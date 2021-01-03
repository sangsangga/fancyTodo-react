require('dotenv').config()
const express = require('express')
const app = express();
const router = require('./routes/index')
const PORT = 3000;
const errorHandler = require('./middlewares/errorHandler')
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/',router)
app.use(errorHandler)

app.listen(PORT,() => {
   console.log(`Running on http://localhost:${PORT}`);
})
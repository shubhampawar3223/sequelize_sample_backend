const express = require('express');
const helmet = require('helmet')
const cors = require('cors')
const app = express();
const db = require('./models');
const port = process.env.PORT || 4600;
const apiRoutes = require('./router/routes');

app.use(helmet())
app.use(cors());
app.use(express.json());
app.use('/api',apiRoutes)

db.sequelize.sync().then(()=>{
    app.listen(port,()=>console.log("Server is connected at port: "+port))             
})


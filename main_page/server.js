const express = require('express');
const connectDB = require('./config/db')
// connectDB()
const app = express();
// connect database
connectDB()
app.use(express.json({extended:false}));

// app.get('/',(req,res) => res.send('API Running'));

app.use("/",require("./route/details"))
// app.use("/",require("./route/details"))


const PORT = process.env.PORT || 6000;
// app.set('port', process.env.PORT || 3000);
app.listen(PORT,() => console.log(`Server started on port ${PORT}`));

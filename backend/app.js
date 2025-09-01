const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cors());

app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());

//Import Routers

const adminRouter = require("./routes/admin.routes.js")
const userRouter = require("./routes/user.routes.js")

//routes declaration

app.use("/api/v1/admin",adminRouter);
app.use("/api/v1/user",userRouter)

module.exports = { app };

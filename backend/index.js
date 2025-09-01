const dotenv = require('dotenv');
const connectDB = require('./db/index');
const app = require('./app').app;

dotenv.config({
    path: './.env'
});

connectDB()
    .then(() => {
        const PORT = process.env.PORT || 8000;
       
        app.listen(PORT, () => {
            console.log(`⚙️ Server is running at port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('MONGO db connection failed !!!', err);
    });

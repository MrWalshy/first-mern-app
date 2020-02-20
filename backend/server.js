let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let dbConfig = require('./database/db');

// Express routes
const studentRoutes = require('../backend/routes/student.route');

// Connect the db
const connectDb = async () => {
    try {
        await mongoose.connect(dbConfig.db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.info(`Connected to database on Worker process: ${process.pid}`)
    } catch (error) {
        console.log('Could not connect to database: FAIL!');
        process.exit(1); // Exits the process even if there are still async operations pending
    }
}

connectDb();

// Initialise Express
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/students', studentRoutes);

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log(`Connect to port ${port}`);
});

// 404 Error
app.use((request, response, next) => {
    next(createError(404));
});

app.use(function(error, request, response, next) {
    console.error(error.message);
    if (!error.statusCode) error.statusCode = 500;
    response.status(error.statusCode).send(error.message);
});
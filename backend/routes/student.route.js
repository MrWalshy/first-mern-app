let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

// Student model
let studentSchema = require('../models/Student');

// CREATE student route
router.route('/create-student').post((request, response, next) => {
    studentSchema.create(request.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log(data);
            response.json(data);
        }
    });
});

// READ students route
router.route('/').get((request, response) => {
    studentSchema.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            response.json(data);
        }
    });
});

// GET single student route
router.route('/edit-student/:id').get((request, response) => {
    studentSchema.findById(request.params.id, (error,data) => {
        if (error) {
            return next(error);
        } else {
            response.json(data);
        }
    });
});

// UPDATE student route
router.route('/update-student/:id').put((request, response, next) => {
    studentSchema.findByIdAndUpdate(request.params.id, {$set: request.body}, (error, data) => {
        if (error) {
            console.log(error);
            return next(error);
        } else {
            response.json(data);
            console.log('Student update: SUCCESS!')
        }
    });
});

// DELETE student route
router.route('/delete-student/:id').delete((request, response, next) => {
    studentSchema.findByIdAndRemove(request.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            response.status(200).json({
                msg: data
            });
        }
    });
});

module.exports = router;
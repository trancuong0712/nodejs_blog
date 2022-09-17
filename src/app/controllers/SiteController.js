const CourseModel = require('../models/Course')
const { multipleMongooseToObject } = require('../../utils/mongoose')
class SiteController {
    index(req, res, next) {
        CourseModel.find({})
            .then(courses => {
                courses = multipleMongooseToObject(courses)
                res.render('home', { courses })
            })
            .catch(err => next(err));
    }

    search(req, res) {
        res.send('search');
    }
}

module.exports = new SiteController();

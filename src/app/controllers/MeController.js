const CourseModel = require('../models/Course')
const { mongooseToObject, multipleMongooseToObject } = require('../../utils/mongoose')

class MeController {
    storedCourses(req, res, next) {
        let courseRes = CourseModel.find({})
        
        if (req.query.hasOwnProperty('_sort')) {
            courseRes = courseRes.sort({
                [req.query.column]: req.query.type
            })
        }

        Promise.all([courseRes, CourseModel.countDocumentsDeleted({})])
            .then(([courses, deletedCount]) => res.render('me/stored-courses', {courses: multipleMongooseToObject(courses), deletedCount} ))
            .catch(next)
    }

    trashCourses(req, res, next) {
        CourseModel.findDeleted({})
            .then(courses => {
                courses = multipleMongooseToObject(courses)
                res.render('me/trash-courses', { courses })
            })
            .catch(err => next(err));
    }
}

module.exports = new MeController();

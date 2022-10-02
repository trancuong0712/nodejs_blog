const Course = require('../models/Course')
const { mongooseToObject, multipleMongooseToObject } = require('../../utils/mongoose')

class CoursesController {
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                courses = multipleMongooseToObject(courses)
                res.render('courses/index', { courses })
            })
            .catch(err => next(err));
    }

    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: mongooseToObject(course)})
            })
            .catch(next)
        
    }

    create(req, res, next) {
        res.render('courses/create')
    }

    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${formData.videoId}/hqdefault.jpg`
        const course = new Course(formData);
        course.save().then(() => {
            res.redirect('/me/stored/courses')
        })
    }

    edit(req, res, next) {
        Course.findOne({ _id: req.params.id })
            .then(course => res.render('courses/edit', { course: mongooseToObject(course) }))
            .catch(next)
        
    }

    update(req, res, next) {
        Course.updateOne({_id: req.params.id }, req.body,)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }

    destroy(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }

    forceDelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/me/trash/courses'))
            .catch(next)
    }

    restoreDelete(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('/me/trash/courses'))
            .catch(next)
    }

}

module.exports = new CoursesController();

const courseRouter = require('./courses');
const meRouter = require('./me');
const siteRouter = require('./site');

function route(app) {
    app.use('/courses', courseRouter)
    app.use('/me', meRouter)
    app.get('/', siteRouter)
}

module.exports = route;

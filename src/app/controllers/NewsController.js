class NewsController {
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('show detail');
    }
}

module.exports = new NewsController();

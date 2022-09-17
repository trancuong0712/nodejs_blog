class SiteController {
    index(req, res) {
        res.render('news');
    }

    search(req, res) {
        res.send('search');
    }
}

module.exports = new SiteController();

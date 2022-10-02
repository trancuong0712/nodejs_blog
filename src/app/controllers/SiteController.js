
class SiteController {
    index(req, res, next) {
        res.send("home")
    }

    search(req, res) {
        res.send('search');
    }
}

module.exports = new SiteController();

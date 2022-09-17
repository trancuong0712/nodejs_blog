class NewsController {
    index(req, res) {
       res.send("news pages");
    }

    show(req, res) {
        res.send('show detail');
    }
}

module.exports = new NewsController();

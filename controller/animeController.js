Anime = require('../models/animeModel');

exports.index = (req,res) => {
    Anime.get((err, anime) => {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json(anime);
    }, parseInt(req.params.limit,10));
}
exports.view = (req, res) => {
    Anime.findById(req.params.anime_id, (err, anime) => {
        if (err) {
            res.send(err);
        }
        res.json(anime);
    })
}
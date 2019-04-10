Anime = require('../models/animeModel');

exports.index = (req,res) => {
    Anime.get((err, anime) => {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Anime retrieved successfully",
            data: anime
        });
    });
}
exports.view = (req, res) => {
    Anime.findById(req.params.anime_id, (err, anime) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json({
            message: 'Anime detail',
            data: anime
        });
    })
}
const mongo = require('mongoose');

const animeSchema = mongo.Schema({
    _id: mongo.Schema.Types.ObjectId,
    request_hash: String,
    request_cached: Boolean,
    request_cache_expiry: Number,
    mal_id: Number,
    url: String,
    image_url: String,
    trailer_url: String,
    title: String,
    title_english : String,
    title_japanese : String,
    title_synonyms : Array,
    type : String,
    source : String,
    episodes: Number,
    status : String,    
    airing : Boolean,
    aired: Object,
    duration: String,
    rating: String,
    score: Number,
    score_by: Number,
    rank: Number,
    popularity: Number,
    members: Number,
    favorites: Number,
    synopsis: String,
    premiered: String,
    broadcast: String,
    related: Object,
    producers: Array,
    licensors: Array,
    studios: Array,
    genres: Array,
    opening_themes: Array,
    ending_themes: Array

});

var Anime = module.exports = mongo.model('animes',animeSchema);

module.exports.get = function(callback, limit) {
    Anime.find(callback)
}

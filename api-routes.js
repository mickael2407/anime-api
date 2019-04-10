const router = require('express').Router();
const animeController = require('./controller/animeController');
router.get('/', (req,res) => {
    res.json({
        status: 'API Its Working',
        message: 'Welcome'
    });
});

router.route('/anime').get(animeController.index);
router.route('/anime/:anime_id').get(animeController.view);
module.exports = router;
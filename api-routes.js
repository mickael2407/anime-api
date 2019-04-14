const router = require('express').Router();
const animeController = require('./controller/animeController');
const authController = require('./controller/authController');

router.get('/', (req,res) => {
    res.json({
        status: 'API Its Working',
        message: 'Welcome'
    });
});

router.route('/anime/limit/:limit').get(animeController.index);
router.route('/anime/:anime_id').get(animeController.view);
// router.route('/auth/sigin').post(authController.signin);
module.exports = router;

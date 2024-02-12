const { Router } = require('express');
const authController = require('../controllers/auth-controller');
const router = Router();

router.post('/registration', authController.registration);

module.exports = router;
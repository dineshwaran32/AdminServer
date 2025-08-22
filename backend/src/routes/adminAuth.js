const express = require('express');
const router = express.Router();
const { auth, authorize } = require('../middleware/auth');
const { login, getMe } = require('../controllers/authController');

// @route   POST /api/admin/auth/login
// @desc    Admin login
// @access  Public
router.post('/login', login);

// @route   GET /api/admin/auth/me
// @desc    Get current admin user
// @access  Private (Admin)
router.get('/me', auth, authorize('admin'), getMe);

module.exports = router;

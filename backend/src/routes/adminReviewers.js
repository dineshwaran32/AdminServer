const express = require('express');
const router = express.Router();
const { auth, authorize } = require('../middleware/auth');
const { getUsers } = require('../controllers/userController');

// @route   GET /api/admin/reviewers
// @desc    Get all reviewers
// @access  Private (Admin)
router.get('/', auth, authorize('admin'), async (req, res) => {
  try {
    // Filter users to only get reviewers
    req.query.role = 'reviewer';
    await getUsers(req, res);
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error fetching reviewers',
      error: error.message 
    });
  }
});

module.exports = router;

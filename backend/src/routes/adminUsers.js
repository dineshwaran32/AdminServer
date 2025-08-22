const express = require('express');
const router = express.Router();
const { auth, authorize } = require('../middleware/auth');
const { 
  getUsers, 
  getUserById, 
  createUser, 
  updateUser, 
  deleteUser,
  recalculateAllCreditPoints,
  recalculateUserCreditPoints
} = require('../controllers/userController');

// @route   GET /api/admin/users
// @desc    Get all users (with filtering and pagination)
// @access  Private (Admin)
router.get('/', auth, authorize('admin'), getUsers);

// @route   POST /api/admin/users
// @desc    Create a new user
// @access  Private (Admin)
router.post('/', auth, authorize('admin'), createUser);

// @route   GET /api/admin/users/:id
// @desc    Get user by ID
// @access  Private (Admin)
router.get('/:id', auth, authorize('admin'), getUserById);

// @route   PUT /api/admin/users/:id
// @desc    Update user
// @access  Private (Admin)
router.put('/:id', auth, authorize('admin'), updateUser);

// @route   DELETE /api/admin/users/:id
// @desc    Delete user
// @access  Private (Admin)
router.delete('/:id', auth, authorize('admin'), deleteUser);

// @route   POST /api/admin/users/recalculate-credit-points
// @desc    Recalculate credit points for all users
// @access  Private (Admin)
router.post('/recalculate-credit-points', auth, authorize('admin'), recalculateAllCreditPoints);

// @route   POST /api/admin/users/:userId/recalculate-credit-points
// @desc    Recalculate credit points for specific user
// @access  Private (Admin)
router.post('/:userId/recalculate-credit-points', auth, authorize('admin'), recalculateUserCreditPoints);

module.exports = router;

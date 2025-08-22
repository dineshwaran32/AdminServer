const express = require('express');
const router = express.Router();
const { auth, authorize } = require('../middleware/auth');
const { 
  getIdeas, 
  getIdeaById, 
  updateIdeaStatus,
  getIdeasStats
} = require('../controllers/ideaController');

// @route   GET /api/admin/ideas
// @desc    Get all ideas (with filtering and pagination)
// @access  Private (Admin)
router.get('/', auth, authorize('admin'), getIdeas);

// @route   GET /api/admin/ideas/:id
// @desc    Get idea by ID
// @access  Private (Admin)
router.get('/:id', auth, authorize('admin'), getIdeaById);

// @route   PATCH /api/admin/ideas/:id/status
// @desc    Update idea status
// @access  Private (Admin)
router.patch('/:id/status', auth, authorize('admin'), updateIdeaStatus);

// @route   GET /api/admin/ideas/stats/dashboard
// @desc    Get ideas statistics for dashboard
// @access  Private (Admin)
router.get('/stats/dashboard', auth, authorize('admin'), getIdeasStats);

module.exports = router;

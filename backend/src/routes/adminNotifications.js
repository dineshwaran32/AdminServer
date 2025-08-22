const express = require('express');
const router = express.Router();
const { auth, authorize } = require('../middleware/auth');
const { 
  getAdminNotifications, 
  markNotificationAsRead,
  markAllNotificationsAsRead
} = require('../controllers/notificationController');

// @route   GET /api/admin/ideas/notifications
// @desc    Get all notifications for admin
// @access  Private (Admin)
router.get('/', auth, authorize('admin'), getAdminNotifications);

// @route   PATCH /api/admin/ideas/notifications/:id/read
// @desc    Mark notification as read
// @access  Private (Admin)
router.patch('/:id/read', auth, authorize('admin'), markNotificationAsRead);

// @route   PATCH /api/admin/ideas/notifications/read-all
// @desc    Mark all notifications as read
// @access  Private (Admin)
router.patch('/read-all', auth, authorize('admin'), markAllNotificationsAsRead);

module.exports = router;

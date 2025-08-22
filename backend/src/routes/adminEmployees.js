const express = require('express');
const router = express.Router();
const { auth, authorize } = require('../middleware/auth');
const { 
  getUsers, 
  createUser, 
  updateUser, 
  deleteUser,
  recalculateAllCreditPoints,
  recalculateUserCreditPoints
} = require('../controllers/userController');

// @route   GET /api/admin/employees
// @desc    Get all employees (with filtering and pagination)
// @access  Private (Admin)
router.get('/', auth, authorize('admin'), getUsers);

// @route   POST /api/admin/employees
// @desc    Create a new employee
// @access  Private (Admin)
router.post('/', auth, authorize('admin'), createUser);

// @route   PATCH /api/admin/employees/:id/credits
// @desc    Update employee credit points
// @access  Private (Admin)
router.patch('/:id/credits', auth, authorize('admin'), (req, res) => {
  // This would need to be implemented in the userController
  // For now, redirecting to the updateUser function
  req.body.creditPoints = req.body.creditPoints || 0;
  updateUser(req, res);
});

// @route   GET /api/admin/employees/export/excel
// @desc    Export employees to Excel
// @access  Private (Admin)
router.get('/export/excel', auth, authorize('admin'), (req, res) => {
  // This would need to be implemented
  res.status(501).json({ message: 'Excel export not implemented yet' });
});

// @route   POST /api/admin/employees/bulk-import
// @desc    Bulk import employees from Excel
// @access  Private (Admin)
router.post('/bulk-import', auth, authorize('admin'), (req, res) => {
  // This would need to be implemented
  res.status(501).json({ message: 'Bulk import not implemented yet' });
});

// @route   POST /api/admin/employees/bulk-delete
// @desc    Bulk delete employees
// @access  Private (Admin)
router.post('/bulk-delete', auth, authorize('admin'), (req, res) => {
  // This would need to be implemented
  res.status(501).json({ message: 'Bulk delete not implemented yet' });
});

// @route   GET /api/admin/employees/bulk-delete-template
// @desc    Get bulk delete template
// @access  Private (Admin)
router.get('/bulk-delete-template', auth, authorize('admin'), (req, res) => {
  // This would need to be implemented
  res.status(501).json({ message: 'Bulk delete template not implemented yet' });
});

module.exports = router;

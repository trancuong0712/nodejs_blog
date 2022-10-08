const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CoursesController');

router.get('/create', coursesController.create);
router.post('/store', coursesController.store);
router.post('/handle-form-actions', coursesController.handleFormActions);
router.get('/:id/edit', coursesController.edit);
router.put('/:id', coursesController.update);
router.delete('/:id', coursesController.destroy);
router.delete('/:id/force', coursesController.forceDelete);
router.patch('/:id/restore', coursesController.restoreDelete);
router.get('/:slug', coursesController.show);
router.get('/', coursesController.index);

module.exports = router;

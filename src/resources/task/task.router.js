const router = require('express').Router();
const Task = require('./task.model');
const taskService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await taskService.getAll();
  res.json(tasks.map(Task.toResponse));
});

router.route('/:taskId').get(async (req, res) => {
  const { taskId } = req.params;
  const task = await taskService.getById(taskId);
  res.json(Task.toResponse(task));
});

router.route('/').post(async (req, res) => {
  const task = await taskService.create(req.body);
  res.json(Task.toResponse(task));
});

router.route('/:taskId').put(async (req, res) => {
  const { taskId } = req.params;
  const task = await taskService.update(taskId, req.body);
  res.json(Task.toResponse(task));
});

router.route('/:taskId').delete(async (req, res) => {
  const { taskId } = req.params;
  const task = await taskService.remove(taskId);
  res.json(Task.toResponse(task));
});

module.exports = router;

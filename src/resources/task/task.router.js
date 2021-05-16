const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const taskService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await taskService.getAll();
  return res.status(200).json(tasks.map(Task.toResponse));
});

router.route('/:taskId').get(async (req, res) => {
  const { taskId, boardId } = req.params;
  const task = await taskService.getById(taskId, boardId);
  if (!task) {
    return res.status(404).send('Task not found');
  }
  return res.status(200).json(Task.toResponse(task));
});

router.route('/').post(async (req, res) => {
  const { boardId } = req.params;
  const task = await taskService.create(boardId, req.body);
  return res.status(201).json(Task.toResponse(task));
});

router.route('/:taskId').put(async (req, res) => {
  const { taskId, boardId } = req.params;
  const task = await taskService.update(taskId, boardId, req.body);
  return res.status(200).json(Task.toResponse(task));
});

router.route('/:taskId').delete(async (req, res) => {
  const { taskId, boardId } = req.params;
  await taskService.remove(taskId, boardId);
  return res.status(204).send('The task has been deleted');
});

module.exports = router;

const tasksRepo = require('./task.memory.repository');
const Task = require('./task.model');

const getAll = () => tasksRepo.getAll();
const getById = (taskId, boardId) => tasksRepo.getById(taskId, boardId);
const create = (boardId, entry) =>
  tasksRepo.create(new Task({ ...entry, boardId }));
const update = (taskId, boardId, entry) =>
  tasksRepo.update(taskId, boardId, { ...new Task(entry), taskId, boardId });
const remove = (taskId, boardId) => tasksRepo.remove(taskId, boardId);
const unassign = (userId) => tasksRepo.unassign(userId);
const removeByBoardId = (boardId) => tasksRepo.removeByBoardId(boardId);

module.exports = { getAll, getById, create, update, remove, unassign, removeByBoardId };

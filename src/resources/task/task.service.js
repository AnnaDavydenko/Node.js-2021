const tasksRepo = require('./task.memory.repository');
const Task = require('./task.model');

const getAll = () => tasksRepo.getAll();
const getById = (taskId, boardId) => tasksRepo.getById(taskId, boardId);
const create = (entry) => tasksRepo.create(new Task(entry));
const update = (taskId, boardId, entry) => tasksRepo.update(taskId, boardId, new Task(entry));
const remove = (taskId, boardId) => tasksRepo.remove(taskId, boardId);

module.exports = { getAll, getById, create, update, remove };

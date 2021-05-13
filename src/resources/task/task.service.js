const tasksRepo = require('./task.memory.repository');
const Task = require('./task.model');

const getAll = () => tasksRepo.getAll();
const getById = (id) => tasksRepo.getById(id);
const create = (entry) => tasksRepo.create(new Task(entry));
const update = (id, entry) => tasksRepo.update(id, new Task(entry));
const remove = (id) => tasksRepo.remove(id);

module.exports = { getAll, getById, create, update, remove };

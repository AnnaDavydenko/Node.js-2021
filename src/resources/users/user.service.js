const usersRepo = require('./user.memory.repository');
const User = require('./user.model');


const getAll = () => usersRepo.getAll();
const getById = (id) => usersRepo.getById(id);
const create = (entry) => usersRepo.create(new User(entry));
const update = (id, entry) => usersRepo.update(id, new User(entry));
const remove = (id) => usersRepo.remove(id);

module.exports = { getAll, getById, create, update, remove };

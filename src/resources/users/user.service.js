const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getById = (id) => usersRepo.getById(id);
const create = (id) => usersRepo.getById(id);
const update = (id) => usersRepo.getById(id);
const remove = (id) => usersRepo.getById(id);
module.exports = { getAll, getById };

const { v4: uuid } = require('uuid');
const boardsRepo = require('./board.memory.repository');
const tasksRepo = require('../task/task.memory.repository');
const Board = require('./board.model');


const getAll = () => boardsRepo.getAll();
const getById = (id) => boardsRepo.getById(id);
const create = (entry) => {
  const board = new Board(entry);
  board.columns = board.columns.map(item => ({ ...item, id: uuid()}));
  return boardsRepo.create(board);
};
const update = (id, entry) => {
  const board = new Board(entry);
  return boardsRepo.update(id, { ...board, id });
};
const remove = (id) => {
  tasksRepo.removeByBoardId(id);
  return boardsRepo.remove(id);
};

module.exports = { getAll, getById, create, update, remove };

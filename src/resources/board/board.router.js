const router = require('express').Router();
const Board = require('./board.model');
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  res.json(boards.map(Board.toResponse));
});

router.route('/:boardId').get(async (req, res) => {
  const { boardId } = req.params; // query
  const boards = await boardService.getById(boardId);
  res.json(boards.map(Board.toResponse));
});

router.route('/').post(async (req, res) => {
  const boards = await boardService.create(req.body);
  res.json(boards.map(Board.toResponse));
});

router.route('/:boardId').put(async (req, res) => {
  const { boardId } = req.params; // query
  const boards = await boardService.update(boardId, req.body);
  res.json(boards.map(Board.toResponse));
});

router.route('/:boardId').delete(async (req, res) => {
  const { boardId } = req.params; // query
  const boards = await boardService.remove(boardId);
  res.json(boards.map(Board.toResponse));
});

module.exports = router;

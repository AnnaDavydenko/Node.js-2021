const router = require('express').Router();
const { v4: uuid } = require('uuid');
const Board = require('./board.model');
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  res.json(boards.map(Board.toResponse));
});

router.route('/:boardId').get(async (req, res) => {
  const { boardId } = req.params;
  const board = await boardService.getById(boardId);
  res.json(Board.toResponse(board));
});

router.route('/').post(async (req, res) => {
  const board = await boardService.create(req.body);
  res.json(Board.toResponse(board));
// .map(item => ({ ...item, id: uuid()}))
});

router.route('/:boardId').put(async (req, res) => {
  const { boardId } = req.params;
  const board = await boardService.update(boardId, req.body);
  res.json(Board.toResponse(board));
});

router.route('/:boardId').delete(async (req, res) => {
  const { boardId } = req.params;
  const board = await boardService.remove(boardId);
  res.json(Board.toResponse(board));
});

module.exports = router;

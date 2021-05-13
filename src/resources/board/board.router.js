const router = require('express').Router();
const createError = require('http-errors');
const Board = require('./board.model');
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  return res.status(200).json(boards.map(Board.toResponse));
});

router.route('/:boardId').get(async (req, res) => {
  const { boardId } = req.params;
  const board = await boardService.getById(boardId);
  return res.status(200).json(Board.toResponse(board));
});

router.route('/').post(async (req, res) => {
  const board = await boardService.create(req.body);
  return res.status(201).json(Board.toResponse(board));
});

router.route('/:boardId').put(async (req, res) => {
  const { boardId } = req.params;
  const board = await boardService.update(boardId, req.body);
  return res.status(200).json(Board.toResponse(board));
});

router.route('/:boardId').delete(async (req, res, next) => {
  const { boardId } = req.params;
  const boardsData = await boardService.remove(boardId);
  if (!boardsData) {
    return next(createError(404, 'Not Found'));
  }
  return res.status(204).json({ success: true });
});

module.exports = router;

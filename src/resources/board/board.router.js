const router = require('express').Router();
const Board = require('./board.model');
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  return res.status(200).json(boards.map(Board.toResponse));
});

router.route('/:boardId').get(async (req, res) => {
  const { boardId } = req.params;
  const board = await boardService.getById(boardId);
  if (!board) {
    return res.status(404).send('Board not found');
  }
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

router.route('/:boardId').delete(async (req, res) => {
  const { boardId } = req.params;
  if (!boardId) {
    return res.status(401).send('Access token is missing or invalid');
  }
  const boardsData = await boardService.remove(boardId);
  if (!boardsData) {
    return res.status(404).send('Board not found');
  }
  return res.status(204).send('The board has been deleted');
});

module.exports = router;

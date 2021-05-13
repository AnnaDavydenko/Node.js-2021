const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  return res.status(200).json(users.map(User.toResponse));
});

router.route('/:userId').get(async (req, res) => {
  const { userId } = req.params;
  const user = await usersService.getById(userId);
  return res.status(200).json(User.toResponse(user));
});

router.route('/').post(async (req, res) => {
  const user = await usersService.create(req.body);
  return res.status(201).json(User.toResponse(user));
});

router.route('/:userId').put(async (req, res) => {
  const { userId } = req.params;
  const user = await usersService.update(userId, req.body);
  return res.status(200).json(User.toResponse(user));
});

router.route('/:userId').delete(async (req, res) => {
  const { userId } = req.params;
  await usersService.remove(userId);
  return res.status(204).send('The user has been deleted');
});

module.exports = router;

let collection = [];

const getAll = async () => collection;

const getById = async (taskId, boardId) => collection.find(entry => entry.id === taskId && entry.boardId === boardId);

const create = async (entry) => {
  collection.push(entry);
  return entry;
};

const update = async (taskId, boardId, entry) => {
  let existing = null;
  collection.forEach((item, index) => {
    if (item.id === taskId && item.boardId === boardId) {
      collection[index] = { ...entry, id: taskId };
      existing = collection[index];
    }
  });
  return existing;
};

const remove = async (taskId, boardId) => {
  const index = collection.findIndex(item => item.id === taskId && item.boardId === boardId);
  const { id } = collection[index];
  collection.splice(index, 1);
  return id;
};

const unassign = async (userId) => {
  collection.forEach((item) => {
    const item1 = item;
    if (item1.userId === userId) {
      item1.userId = null;
    }
  })
};

const removeByBoardId = async (boardId) => {
  collection = collection.filter(item => item.boardId !== boardId);
};

module.exports = { getAll, getById, create, update, remove, unassign, removeByBoardId };

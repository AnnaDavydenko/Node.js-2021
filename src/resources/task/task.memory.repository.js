const collection = [];

const getAll = async () => {
  return collection;
};

const getById = async (taskId, boardId) => {
  return collection.find(entry => entry.id === taskId && entry.boardId === boardId);
};

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

module.exports = { getAll, getById, create, update, remove };

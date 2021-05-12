const collection = [];

const getAll = async () => {
  // TODO: mock implementation. should be replaced during task development
  return collection;
};

const getById = async (id) => {
  return collection.find(entry => entry.id === id);
};

module.exports = { getAll, getById };

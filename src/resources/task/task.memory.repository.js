const collection = [];

const getAll = async () => {
  return collection;
};

const getById = async (id) => {
  return collection.find(entry => entry.id === id);
};

const create = async (entry) => {
  collection.push(entry);
  return entry;
};

const update = async (id, entry) => {
  let existing = collection.find(item => item.id === id);
  existing = { ...entry, id };
  return existing;
};

const remove = async (id) => {
  const index = collection.findIndex(item => item.id === id);
  collection.splice(index, 1);
};

module.exports = { getAll, getById, create, update, remove };

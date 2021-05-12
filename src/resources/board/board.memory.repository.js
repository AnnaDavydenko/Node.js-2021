const collection = [];

const getAll = async () => {
  return collection;
};

const getById = async (id) => {
  return collection.find(entry => entry.id === id);
};

/**
 * Insert board entry to db.
 *
 * @function create
 * @param {Object} entry - board model object
 * @param {string} entry.id - board unique id
 * @param {string} entry.title - board title
 * @param {Array<string>} entry.columns - board title
 * @return {Object} created entry
 */
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

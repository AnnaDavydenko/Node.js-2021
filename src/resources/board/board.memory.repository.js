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
  let existing = null;
  collection.forEach((item, index) => {
    if (item.id === id) {
      collection[index] = { ...entry, id };
      existing = collection[index];
    }
  });
  return existing;
};

const remove = async (id) => {
  const index = collection.findIndex(item => item.id === id);
  const _id = collection[index].id;
  collection.splice(index, 1);
  return _id;
};

module.exports = { getAll, getById, create, update, remove };

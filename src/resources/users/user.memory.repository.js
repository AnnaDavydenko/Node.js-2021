const collection = [];

const getAll = async () => collection;

const getById = async (id) => collection.find(entry => entry.id === id);

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

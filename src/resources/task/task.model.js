const { v4: uuid } = require('uuid');

class Task {
  constructor({
    id = uuid(),
    title = 'New board',
    order = 123,
    description = 'New board description',
    userId = null,
    boardId = null,
    columnId = 123,
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task) {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return {  id, title, order, description, userId, boardId,columnId };
  }
}

module.exports = Task;

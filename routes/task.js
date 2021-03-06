const api = require('./../controllers');

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => ({ msg: 'Todo API Coding Challenge' }),
  },
  {
    method: 'GET',
    path: '/api/v1',
    handler: (request, h) => ({ msg: 'Todo API Coding Challenge' }),
  },
  {
    // Get all tasks
    method: 'GET',
    path: '/api/v1/tasks',
    handler: api.task.all.handler,
  },
  {
    // Get single task
    method: 'GET',
    path: '/api/v1/task/{id}',
    handler: api.task.get.handler,
  },
  {
    // Create a new task
    method: 'POST',
    path: '/api/v1/tasks',
    handler: api.task.create.handler,
  },
  {
    // Mark task as done
    method: 'PUT',
    path: '/api/v1/task/{id}/done',
    handler: api.task.markAsDone.handler,
  },
  {
    // Mark task as active
    method: 'PUT',
    path: '/api/v1/task/{id}/active',
    handler: api.task.markAsActive.handler,
  },
  {
    // Mark task as active
    method: 'DELETE',
    path: '/api/v1/task/{id}',
    handler: api.task.markAsDeleted.handler,
  },
  {
    // Get events associated with specific task (id)
    method: 'GET',
    path: '/api/v1/task/{id}/events',
    handler: api.task.events.handler,
  },

];

module.exports = routes;

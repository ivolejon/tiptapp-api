const api = require('./../controllers');
console.log(api.task.create);
const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return { msg: 'Todo API Coding Challenge' };
    }
  },
  {
    method: "GET",
    path: "/api/v1",
    handler: (request, h) => {
      return { success: true };
    }
  },
  {
    method: "POST",
    path: "/api/v1/tasks",
    handler: api.task.create.handler
  }
];

module.exports = routes;

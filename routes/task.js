const api = require("./../controllers");

const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return { msg: "Todo API Coding Challenge" };
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
    method: "GET",
    path: "/api/v1/tasks",
    handler: api.task.all.handler
  },
  {
    method: "POST",
    path: "/api/v1/tasks",
    handler: api.task.create.handler
  }
];

module.exports = routes;

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
    // Get all tasks
    method: "GET",
    path: "/api/v1/tasks",
    handler: api.task.all.handler
  },
  {
    //Get single task
    method: "GET",
    path: "/api/v1/task/{id}",
    handler: api.task.get.handler
  },
  {
    // Create a new task
    method: "POST",
    path: "/api/v1/tasks",
    handler: api.task.create.handler
  },
  {
    // Mark task as done
    method: "PUT",
    path: "/api/v1/task/{id}/done",
    handler: api.task.done.handler
  },
  {
    // Mark task as active
    method: "PUT",
    path: "/api/v1/task/{id}/active",
    handler: api.task.active.handler
  }

];

module.exports = routes;

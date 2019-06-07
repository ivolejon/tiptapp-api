const Task = require("./../models/task");
const taskController = {
  create: {
    async handler(request, h) {
      const task = await new Task({
        name: "ivoTestar",
        description: "ivoTestar",
        status: "active",
        list: "default list"
      });
      task.save();
      let data = { message: "Task created successfully", task };
      return h.response(data).code(201);
    }
  },
  all: {
    async handler(request, h) {
      let data = await Task.find({}).sort({ createdAt: "desc" });
      return h.response(data).code(200);
    }
  },
  get: {
    async handler(request, h) {
      const id = request.params.id;
      let data = await Task.findOne({ _id: id });
      return h.response(data).code(200);
    }
  },
  done: {
    async handler(request, h) {
      const filter = { _id: request.params.id };
      const update = { status: "done" };
      let data = await Task.findOneAndUpdate(filter, update);
      return h.response(data).code(200);
    }
  },
  active: {
    async handler(request, h) {
      const filter = { _id: request.params.id };
      const update = { status: "active" };
      let data = await Task.findOneAndUpdate(filter, update);
      return h.response(data).code(200);
    }
  },
  delete: {
    async handler(request, h) {
    // Made a decsion to make a 'soft deletion, task can be permanently deleted later...'
      const filter = { _id: request.params.id };
      const update = { status: "deleted" };
      let data = await Task.findOneAndUpdate(filter, update);
      return h.response(data).code(200);
    }
  }
};

module.exports = taskController;

// jshint esversion:8
const Task = require("./../models/task");
const Event = require("./../models/event");
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
      new Event({ type: "task", description: "created", task: task._id }).save();
      return h.response(data).code(201);
    }
  },
  all: {
    async handler(request, h) {
      // Function only returns tasks that have status 'done' or 'active'
      let data = await Task.find({status: { $ne: 'deleted' }}).sort({ createdAt: "desc" });
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
      new Event({ type: "task", description: "markedAsDone", task: data._id }).save();
      return h.response(data).code(200);
    }
  },
  active: {
    async handler(request, h) {
      const filter = { _id: request.params.id };
      const update = { status: "active" };
      let data = await Task.findOneAndUpdate(filter, update);
      new Event({ type: "task", description: "markedAsActive", task: data._id }).save();
      return h.response(data).code(200);
    }
  },
  delete: {
    async handler(request, h) {
    // Made a decsion to make a 'soft deletion, task can be permanently deleted later...'
      const filter = { _id: request.params.id };
      const update = { status: "deleted" };
      let data = await Task.findOneAndUpdate(filter, update);
      new Event({ type: "task", description: "markedAsDeleted", task: data._id }).save();
      return h.response(data).code(200);
    }
  },

  events: {
    async handler(request, h) {
      const filter = { task: request.params.id, type: 'task' };
      let data = await Event.find(filter).sort({ createdAt: "desc" });
      return h.response(data).code(200);
    }
  }
};

module.exports = taskController;

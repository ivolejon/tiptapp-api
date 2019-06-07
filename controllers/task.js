const Task = require('./../models/task');
const taskController = {
    create: {
        async handler(request, h) {
            const task = await new Task({
              name: 'ivoTestar',
              description: 'ivoTestar',
              status:'active'
            });
            task.save();
            let data = {message: "Task created successfully", task};
            return h.response(data).code(201);
        }
      }
}

module.exports = taskController;

const Task = require('./../models/task');
const taskController = {
    create: {
        async handler(request, h) {
            const task = await new Task({
              name: 'ivoTestar',
              description: 'ivoTestar',
              status:'active',
              list:'default list'
            });
            task.save();
            let data = {message: "Task created successfully", task};
            return h.response(data).code(201);
        }
      },
      all: {
        async handler(request, h) {
            let data = await Task.find({}).sort({ createdAt: 'desc' });
            return h.response(data).code(200);
        }
      },
      
}

module.exports = taskController;

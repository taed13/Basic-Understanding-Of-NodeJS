const taskManagerModel = require("../models/taskManagerModel");

// app.get('/api/v1/tasks') - get all the tasks
// app.post('/api/v1/tasks') - create a new task
// app.get('/api/v1/tasks/:id') - get a single task
// app.patch('/api/v1/tasks/:id') - update task
// app.delete('/api/v1/tasks/:id') - delete task

module.exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await taskManagerModel.find({});
    res.status(200).json({
      success: true,
      data: tasks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports.createTask = async (req, res, next) => {
  try {
    const task = await taskManagerModel.create(req.body);
    res.status(201).json({
      success: true,
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports.getTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await taskManagerModel.findById(id);
    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }
    res.status(200).json({
      success: true,
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports.updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await taskManagerModel.findByIdAndUpdate(id, {
      name: req.body.name,
      completed: req.body.completed,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports.deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await taskManagerModel.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports.updateTaskComplete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await taskManagerModel.findByIdAndUpdate(
      id,
      { completed: true },
      { new: true }
    );
    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }
    res.status(200).json({
      success: true,
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

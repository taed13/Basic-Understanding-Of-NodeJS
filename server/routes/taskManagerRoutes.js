// const {
//     register,
//     login,
//     set_avatar,
//     getAllUsers,
//   } = require("../controllers/usersController");

const router = require("express").Router();

app.get("/api/v1/tasks", getAllTasks);
app.post("/api/v1/tasks", createTask);
app.get("/api/v1/tasks/:id", getTask);
app.patch("/api/v1/tasks/:id", updateTask);
app.delete("/api/v1/tasks/:id", deleteTask);

module.exports = router;

// app.get('/api/v1/tasks') - get all the tasks
// app.post('/api/v1/tasks') - create a new task
// app.get('/api/v1/tasks/:id') - get a single task
// app.patch('/api/v1/tasks/:id') - update task
// app.delete('/api/v1/tasks/:id') - delete task

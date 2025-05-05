import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { getTasks, createTask, updateTask, deleteTask } from "./api";
import Bg from '/bg.jpg';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const handleSave = async (taskData) => {
    try {
      if (taskToEdit) {
        // Update existing task
        const updatedTask = await updateTask(taskToEdit.id, taskData);
        setTasks(tasks.map((task) => (task.id === taskToEdit.id ? updatedTask : task)));
        setTaskToEdit(null); // Clear edit mode
      } else {
        // Create new task
        const newTask = await createTask(taskData);
        setTasks([...tasks, newTask]);
      }
    } catch (err) {
      console.error("Error saving task:", err);
    }
  };
  

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  const handleEdit = (task) => {
    setTaskToEdit(task);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      className="flex items-center justify-center"
    >
      <div className="backdrop-blur-md bg-white/30 p-8 rounded-xl shadow-lg w-full max-w-xl mt-10">
        <h1 className="text-2xl font-bold mb-4 text-center text-black">Task Manager</h1>
        <TaskForm onSave={handleSave} taskToEdit={taskToEdit} />
        <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default App;

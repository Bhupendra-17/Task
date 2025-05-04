import { useState, useEffect } from "react";

export default function TaskForm({ onSave, taskToEdit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description || "");
      setCompleted(taskToEdit.completed || false);
    } else {
      setTitle("");
      setDescription("");
      setCompleted(false);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, description, completed });
    setTitle("");
    setDescription("");
    setCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4">
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
          required
        />

        <textarea
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none resize-none"
          rows={3}
        />

        <label className="flex items-center space-x-3 text-gray-700 cursor-pointer">
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
            className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="text-sm font-medium">Mark as Completed</span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 transform hover:scale-[1.02]"
      >
        {taskToEdit ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}
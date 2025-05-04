import React from "react";

export default function TaskList({ tasks, onEdit, onDelete }) {
    return (
        <div className="max-w-2xl mx-auto mt-8">
            <ul className="space-y-3">
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className={`bg-white shadow-sm rounded-lg p-4 border-l-4 ${task.completed ? 'border-green-500' : 'border-blue-500'
                            } transition-all duration-200 hover:shadow-md`}
                    >
                        <div className="flex justify-between items-center">
                            <div className="space-y-1">
                                <h3 className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                                    {task.title}
                                </h3>
                                {task.description && (
                                    <p className="text-sm text-gray-600">{task.description}</p>
                                )}
                            </div>
                            <div className="flex items-center space-x-2">
                                <button
                                    onClick={() => onEdit(task)}
                                    className="px-4 py-2 text-sm font-medium text-yellow-700 bg-yellow-100 rounded-md hover:bg-yellow-200 transition-colors duration-200"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => onDelete(task.id)}
                                    className="px-4 py-2 text-sm font-medium text-red-700 bg-red-100 rounded-md hover:bg-red-200 transition-colors duration-200"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
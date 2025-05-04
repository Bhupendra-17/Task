const API_URL = "http://localhost:8000/tasks/";

//Get
export const getTasks = async () => {
    const res = await fetch(API_URL);
    return res.json();
};

//Create
// api.js
export async function createTask(task) {
    const response = await fetch("http://localhost:8000/tasks/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task), // don't wrap again
    });
  
    if (!response.ok) {
      const errorData = await response.json(); // avoid reading the body twice
      throw new Error(`Failed to create task: ${JSON.stringify(errorData)}`);
    }
  
    return await response.json();
  }
  

//Update the task using id
export const updateTask = async (id, updatedTask) => {
    const res = await fetch(`${API_URL}${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask),
    });
    return res.json();
};

//Delete any task using id
export const deleteTask = async (id) => {
    await fetch(`${API_URL}${id}`, { method: "DELETE" });
};

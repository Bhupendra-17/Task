# 📝 Task Manager App

A full-stack Task Manager application built using **React (Vite + Tailwind CSS)** for the frontend and **FastAPI** for the backend. Users can create, edit, and delete tasks with a clean UI.

---

## ✨ Features

- Add, edit, and delete tasks
- Responsive UI with Tailwind CSS
- FastAPI backend with CRUD support
- RESTful API integration

---

## 🖥️ Technologies Used

### Frontend
- React (Vite)
- Tailwind CSS

### Backend
- FastAPI
- SQLite 
- Uvicorn

---

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Bhupendra-17/Task.git
```

### 2. Frontend

```bash
cd client 
npm install 
npm run dev
```

By default, it runs at `http://localhost:5173`. 

### 3. Backend Create and activate virtual environment: 
```bash 
cd server
python -m venv venv 
venv\Scripts\activate #on Windows 
pip install fastapi uvicorn
```
Run the backend server:
```bash
uvicorn main:app --reload
```
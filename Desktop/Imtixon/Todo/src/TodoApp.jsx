import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([
      ...todos,
      { id: Date.now(), text: input, completed: false },
    ]);
    setInput("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos =
    filter === "completed"
      ? todos.filter((todo) => todo.completed)
      : filter === "active"
      ? todos.filter((todo) => !todo.completed)
      : todos;

  return (
    <div className="w-full max-w-lg bg-white-90 shadow-2xl rounded-2xl p-8 border border-gray-100">
      <form onSubmit={handleAddTodo} className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Yangi vazifa..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer "
        >
          Qo'shish
        </button>
      </form>
      <div className="flex gap-2 justify-center mb-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-1.5 rounded ${filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} hover:bg-gray-300 cursor-pointer`}
        >
          Barchasi
        </button>
        <button
          onClick={() => setFilter("active")}
          className={`px-4 py-1.5 rounded ${filter === "active" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} hover:bg-gray-300 cursor-pointer`}
        >
          Faollari
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`px-4 py-1.5 rounded ${filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} hover:bg-gray-300 cursor-pointer`}
        >
          Bajarilganlar
        </button>
      </div>
      <ul className="space-y-2">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDelete}
            onToggle={handleToggle}
          />
        ))} 
      </ul>
    </div>
  );
}

export default TodoApp;

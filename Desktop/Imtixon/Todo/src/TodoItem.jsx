import React from "react";

function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li className="flex items-center justify-between bg-gray-100 rounded-xl px-3 py-2">
      <span
        onClick={() => onToggle(todo.id)}
        className={`flex-1 cursor-pointer select-none text-lg ${todo.completed ? "line-through text-gray-400" : "text-gray-800"}`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="ml-3 px-3 py-1.5 bg-red-500 text-white rounded-lg font-medium cursor-pointer hover:bg-red-600"
      >X
      </button>
    </li>
  );
}

export default TodoItem;

import { useState } from "react";
import Todo from "./components/Todo/Todo";
import TodoData from "./models/todoData";
import NewTodo from "./components/NewTodo/NewTodo";

function App() {
  const [tasks, setTasks] = useState<TodoData[]>([]);

  function handleNewTodo(text: string) {
    const newTask = new TodoData(text);
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function handleClearTasks() {
    if (tasks.length <= 0) {
      alert("No tasks to clear");
    }

    if (tasks.length > 0) {
      const confirmed = window.confirm(
        "Are you sure you want to clear all tasks?"
      );

      if (confirmed) {
        setTasks([]);
      }
    }
  }

  function handleRemoveTask(id: string) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  return (
    <div>
      <NewTodo onAddTodo={handleNewTodo} onClearTasks={handleClearTasks} />
      <Todo items={tasks} onRemoveTask={handleRemoveTask} />
    </div>
  );
}

export default App;

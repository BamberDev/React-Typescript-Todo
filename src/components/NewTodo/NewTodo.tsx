import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./NewTodo.module.css";

interface Props {
  onAddTodo: (text: string) => void;
  onClearTasks: () => void;
}

const NewTodo = ({ onAddTodo, onClearTasks }: Props) => {
  const [text, setText] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (text.trim().length === 0) {
      return;
    }

    onAddTodo(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="text">To Do</label>
      <input type="text" id="text" value={text} onChange={handleChange} />
      <div>
        <button type="submit">Add Task</button>
        <button type="button" onClick={onClearTasks}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default NewTodo;

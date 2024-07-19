import { ReactNode } from "react";
import TodoData from "../../models/todoData";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./Todo.module.css";

interface Props {
  items: TodoData[];
  onRemoveTask: (id: string) => void;
  children?: ReactNode;
}

const Todo = ({ items, onRemoveTask }: Props) => {
  return (
    <ul className={styles.todo}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTask={onRemoveTask.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todo;

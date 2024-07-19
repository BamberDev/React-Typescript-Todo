import styles from "./TodoItem.module.css";

interface Props {
  text: string;
  onRemoveTask: () => void;
}

const TodoItem = ({ text, onRemoveTask }: Props) => {
  return (
    <>
      <li className={styles.item}>
        <p>{text}</p>
        <button className={styles.itemButton} onClick={onRemoveTask}>
          Delete
        </button>
      </li>
    </>
  );
};

export default TodoItem;

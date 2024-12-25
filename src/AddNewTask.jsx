import { v4 as uuidv4 } from "uuid";
import uid from "uid2";

export default function AddNewTask(props) {
  const { tasks, setTasks, newTaskLabel, setNewTaskLabel } = props;

  const id = uid(10);

  return (
    <>
      {" "}
      <form>
        <input
          type="text"
          value={newTaskLabel}
          name="task-label"
          id="task-label"
          placeholder="Your task description"
          onChange={(event) => {
            setNewTaskLabel(event.target.value);
          }}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            const updateTasks = [
              ...tasks,
              { label: newTaskLabel, isDone: false, id: uuidv4() },
            ];
            newTaskLabel && setTasks(updateTasks);
            setNewTaskLabel("");
          }}
        >
          Add task
        </button>
      </form>
    </>
  );
}

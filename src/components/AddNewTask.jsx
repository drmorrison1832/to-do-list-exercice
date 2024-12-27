import { v4 as uuidv4 } from "uuid";

export default function AddNewTask(props) {
  const { tasks, setTasks, newTaskLabel, setNewTaskLabel } = props;

  return (
    <div className="new-task-form">
      <form>
        <input
          type="text"
          value={newTaskLabel}
          // name="task-label"
          // id="task-label"
          placeholder="New task..."
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
    </div>
  );
}

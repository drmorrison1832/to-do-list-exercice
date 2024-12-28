import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

export default function AddNewTask(props) {
  const { tasks, setTasks, newTaskLabel, setNewTaskLabel } = props;
  const [updateDate, setUpdateDate] = useState("chargin...");

  return (
    <div className="new-task-form">
      <form>
        <input
          type="text"
          value={newTaskLabel}
          name="new-task-label"
          id="new-task-label"
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
          <p>Add task</p>
        </button>
      </form>
    </div>
  );
}

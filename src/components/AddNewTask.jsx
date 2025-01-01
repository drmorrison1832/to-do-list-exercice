import axios from "axios";
import { useState, useEffect } from "react";

export default function AddNewTask(props) {
  const { setMustRetrieve } = props;
  const [newTaskLabel, setNewTaskLabel] = useState("");

  useEffect(() => {}, []);

  console.log("AddNewTask", new Date().getMilliseconds());

  function handleClick(event) {
    event.preventDefault();
    if (newTaskLabel) {
      axios
        .post("http://localhost:3000/", {
          label: newTaskLabel,
        })
        .then((response) => {
          setNewTaskLabel("");
        })
        .catch((error) => {
          console.error(error);
        });

      console.log(
        "AddNewTask: mustRetrieve set to true",
        new Date().getMilliseconds()
      );
      setMustRetrieve(true);
    }
  }

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
        <button onClick={handleClick}>
          <p>Add task</p>
        </button>
      </form>
    </div>
  );
}

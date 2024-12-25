import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TasksList(props) {
  const { tasks, setTasks, archive, setArchive } = props;

  return (
    tasks && (
      <div>
        {tasks.map((task, index) => {
          return (
            <div key={task.id}>
              <label>
                <input
                  type="checkbox"
                  onChange={(event) => {
                    const updateTasks = [...tasks];
                    if (event.target.checked === true) {
                      updateTasks[index].isDone = true;
                    } else {
                      updateTasks[index].isDone = false;
                    }
                    setTasks(updateTasks);
                  }}
                ></input>
                <span
                  style={
                    task.isDone
                      ? { textDecorationLine: "line-through" }
                      : { textDecorationLine: "none" }
                  }
                >
                  {task.label}
                </span>
              </label>
              <FontAwesomeIcon
                icon="fa-solid fa-trash"
                onClick={() => {
                  const updateArchive = [...archive, task];
                  setArchive(updateArchive);
                  const updateTasks = [...tasks];
                  updateTasks.splice(index, 1);
                  setTasks(updateTasks);
                }}
              />
            </div>
          );
        })}
      </div>
    )
  );
}

export default TasksList;

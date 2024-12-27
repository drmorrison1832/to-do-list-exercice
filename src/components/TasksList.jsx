import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TasksList(props) {
  const { tasks, setTasks, archivedTasks, setArchivedTasks } = props;

  return (
    tasks && (
      <div className="tasks-list">
        {tasks.map((task, index) => {
          return (
            <div className="task" key={task.id}>
              <label>
                <input
                  type="checkbox"
                  checked={task.isDone}
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
                  const updateArchivedTasks = [...archivedTasks, task];
                  setArchivedTasks(updateArchivedTasks);
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

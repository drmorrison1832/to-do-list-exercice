import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ArchivedList(props) {
  const { tasks, setTasks, archivedTasks, setArchivedTasks } = props;

  return (
    archivedTasks && (
      <div className="archived-tasks">
        {archivedTasks.map((task, index) => {
          return (
            <div className="task" key={task.id}>
              <label>
                <input
                  type="checkbox"
                  checked={task.isDone}
                  onChange={(event) => {
                    const updateArchivedTasks = [...archivedTasks];
                    if (event.target.checked === true) {
                      updateArchivedTasks[index].isDone = true;
                    } else {
                      updateArchivedTasks[index].isDone = false;
                    }
                    setArchivedTasks(updateArchivedTasks);
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
                icon="fa-solid fa-rotate-left"
                onClick={() => {
                  const updateArchivedTasks = [...archivedTasks];
                  updateArchivedTasks.splice(index, 1);
                  const updateTasks = [...tasks, task];
                  setArchivedTasks(updateArchivedTasks);
                  setTasks(updateTasks);
                }}
              />
              {/* <FontAwesomeIcon
                icon="fa-solid fa-trash"
                onClick={() => {
                  const updateArchive = [...archive, task];
                  setArchive(updateArchive);
                  const updateTasks = [...tasks];
                  updateTasks.splice(index, 1);
                  setTasks(updateTasks);
                }}
              /> */}
            </div>
          );
        })}
      </div>
    )
  );
}

export default ArchivedList;

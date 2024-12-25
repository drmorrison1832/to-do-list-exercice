import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ArchiveList(props) {
  const { tasks, setTasks, archive, setArchive } = props;

  return (
    archive && (
      <div>
        {archive.map((task, index) => {
          return (
            <div key={task.id}>
              <label>
                <input
                  type="checkbox"
                  checked={task.isDone}
                  onChange={(event) => {
                    const updateArchive = [...archive];
                    if (event.target.checked === true) {
                      updateArchive[index].isDone = true;
                    } else {
                      updateArchive[index].isDone = false;
                    }
                    setArchive(updateArchive);
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
                <FontAwesomeIcon icon="fa-solid fa-rotate-left" />
              </label>
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

export default ArchiveList;

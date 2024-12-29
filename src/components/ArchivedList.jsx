import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ArchivedList(props) {
  const { tasks, setTasks } = props;

  {
    return (
      <div className="archived-tasks">
        {tasks.map((task, index) => {
          if (task.isArchived)
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
                  icon="fa-solid fa-rotate-left"
                  onClick={() => {
                    const updateTasks = [...tasks];
                    updateTasks[index].isArchived = false;
                    setTasks(updateTasks);
                  }}
                />
              </div>
            );
        })}
      </div>
    );
  }
}

export default ArchivedList;

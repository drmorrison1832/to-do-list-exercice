import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axios from "axios";

const TasksList = (props) => {
  const { tasks, setTasks, mustRetrieve, setMustRetrieve } = props;

  useEffect(() => {});

  console.log("TasksList", new Date().getMilliseconds());

  if (mustRetrieve) {
    return (
      <div className="tasks-list">
        {/* <p>
          {mustRetrieve ? "true" : `false, tasks length is ${tasks.length}`}
        </p> */}
        <p>Loading content...</p>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="tasks-list">
        {/* <p>
          {mustRetrieve ? "true" : `false, tasks length is ${tasks.length}`}
        </p> */}
        <p>Start adding tasks...</p>
      </div>
    );
  }

  return (
    <div className="tasks-list">
      {/* {mustRetrieve ? "true" : `false, tasks length is ${tasks.length}`} */}
      {tasks.map((task, index) => {
        if (!task.isArchived) {
          return (
            <div className="task" key={task._id}>
              <label>
                <input
                  type="checkbox"
                  checked={task.isDone}
                  onChange={(event) => {
                    axios
                      .put("http://localhost:3000/", {
                        id: task._id,
                        isDone: event.target.checked ? true : false,
                      })
                      .then((response) => {})
                      .catch((error) => {
                        console.error(error);
                      });

                    console.log(
                      "TasksList: mustRetrieve set to true",
                      new Date().getMilliseconds()
                    );
                    setMustRetrieve(true);
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
                  axios
                    .put("http://localhost:3000/", {
                      id: task._id,
                      isArchived: true,
                    })
                    .then((response) => {})
                    .catch((error) => {
                      console.error(error);
                    });

                  console.log(
                    "TasksList: mustRetrieve set to true",
                    new Date().getMilliseconds()
                  );
                  setMustRetrieve(true);
                }}
              />
              <span
                className="delete"
                onClick={() => {
                  console.log(task._id);
                  axios
                    .delete(`http://localhost:3000/${task._id}`)
                    .then((response) => {
                      console.log(response);
                    })
                    .catch((error) => {
                      console.error(error);
                    });

                  console.log(
                    "TasksList: mustRetrieve set to true",
                    new Date().getMilliseconds()
                  );
                  setMustRetrieve(true);
                }}
              >
                X
              </span>
            </div>
          );
        }
      })}
    </div>
  );
};

export default TasksList;

// const updateTasks = [...tasks];
// if (event.target.checked === true) {
//   updateTasks[index].isDone = true;
// } else {
//   updateTasks[index].isDone = false;
// }
// setTasks(updateTasks);

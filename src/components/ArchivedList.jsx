import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axios from "axios";

function ArchivedList(props) {
  const { tasks, setTasks, mustRetrieve, setMustRetrieve } = props;

  useEffect(() => {
    console.log("ArchivedList", new Date().getMilliseconds());
  });

  if (mustRetrieve) {
    return <div className="tasks-list">Loading content...</div>;
  }

  if (tasks.length === 0) {
    return <div className="tasks-list">Start adding tasks...</div>;
  }

  return (
    <div className="archived-tasks">
      {tasks.map((task, index) => {
        if (task.isArchived)
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

                    // const updateTasks = [...tasks];
                    // if (event.target.checked === true) {
                    //   updateTasks[index].isDone = true;
                    // } else {
                    //   updateTasks[index].isDone = false;
                    // }
                    // setTasks(updateTasks);

                    console.log(
                      "ArchivedList: mustRetrieve set to true",
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
                icon="fa-solid fa-rotate-left"
                onClick={() => {
                  axios
                    .put("http://localhost:3000/", {
                      id: task._id,
                      isArchived: false,
                    })
                    .then((response) => {})
                    .catch((error) => {
                      console.error(error);
                    });

                  console.log(
                    "ArchivedList: mustRetrieve set to true",
                    new Date().getMilliseconds()
                  );
                  setMustRetrieve(true);

                  // const updateTasks = [...tasks];
                  // updateTasks[index].isArchived = false;
                  // setTasks(updateTasks);
                }}
              />
              <span
                className="delete"
                onClick={() => {
                  // console.log(task._id);
                  axios
                    .put("http://localhost:3000/delete", {
                      id: task._id,
                    })
                    .then((response) => {
                      console.log(response);
                    })
                    .catch((error) => {
                      console.error(error);
                    });

                  console.log(
                    "ArchivedList: mustRetrieve set to true",
                    new Date().getMilliseconds()
                  );
                  setMustRetrieve(true);
                }}
              >
                X
              </span>
            </div>
          );
      })}
    </div>
  );
}

export default ArchivedList;

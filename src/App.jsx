import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import TasksList from "./components/TasksList";
import AddNewTask from "./components/AddNewTask";

// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faRotateLeft);

const App = () => {
  console.log("App started", new Date().getMilliseconds());
  const [tasks, setTasks] = useState([]);
  const [mustRetrieve, setMustRetrieve] = useState(false);

  console.log("App: mustRetrieve set to false", new Date().getMilliseconds());

  // Retrieves data after first render or when mustRetrieve changes state.
  useEffect(() => {
    console.log("App: retriving...", new Date().getMilliseconds());
    axios
      .get("http://localhost:3000/")
      .then((response) => {
        setMustRetrieve(false);
        setTasks(response.data);
        console.log(
          "Tasks retrieved from server",
          new Date().getMilliseconds()
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, [mustRetrieve]);

  console.log("App: render", new Date().getMilliseconds());

  return (
    <>
      <TasksList
        tasks={tasks}
        setTasks={setTasks}
        mustRetrieve={mustRetrieve}
        setMustRetrieve={setMustRetrieve}
        isArchived={false}
      />

      <AddNewTask
        mustRetrieve={mustRetrieve}
        setMustRetrieve={setMustRetrieve}
      />

      <TasksList
        tasks={tasks}
        setTasks={setTasks}
        mustRetrieve={mustRetrieve}
        setMustRetrieve={setMustRetrieve}
        isArchived={true}
      />
    </>
  );
};

export default App;

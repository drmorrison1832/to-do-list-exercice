import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import TasksList from "./components/TasksList";
import AddNewTask from "./components/AddNewTask";
import ArchivedList from "./components/ArchivedList";
import AxiosTest from "./components/AxiosTest";

// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faRotateLeft);

function App() {
  console.log("App", new Date().getMilliseconds());
  const [tasks, setTasks] = useState([]);
  const [mustRetrieve, setMustRetrieve] = useState(false);

  console.log("App: mustRetrieve set to false", new Date().getMilliseconds());

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
        // setMustRetrieve(false);
        // console.log("App: mustRetrieve set to false", new Date().getMilliseconds());
      })
      .catch((error) => {
        console.error(error);
      });
  }, [mustRetrieve]);

  console.log("App: render", new Date().getMilliseconds());

  return (
    <>
      {/* <p>mustRetrieve is {mustRetrieve ? "true" : "false"}</p> */}
      <TasksList
        tasks={tasks}
        setTasks={setTasks}
        mustRetrieve={mustRetrieve}
        setMustRetrieve={setMustRetrieve}
      />
      <div>
        <AddNewTask
          mustRetrieve={mustRetrieve}
          setMustRetrieve={setMustRetrieve}
        />
        {/* <AxiosTest /> */}
      </div>
      <ArchivedList
        tasks={tasks}
        setTasks={setTasks}
        mustRetrieve={mustRetrieve}
        setMustRetrieve={setMustRetrieve}
      />
    </>
  );
}

export default App;

import "./App.css";
import { useState, useEffect } from "react";
import TasksList from "./components/TasksList";
import AddNewTask from "./components/AddNewTask";
import ArchivedList from "./components/ArchivedList";
import AxiosTest from "./components/AxiosTest";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faRotateLeft);

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskLabel, setNewTaskLabel] = useState("");
  const [archivedTasks, setArchivedTasks] = useState([]);

  return (
    <>
      <TasksList
        tasks={tasks}
        setTasks={setTasks}
        archivedTasks={archivedTasks}
        setArchivedTasks={setArchivedTasks}
      />
      <div>
        <AddNewTask
          tasks={tasks}
          setTasks={setTasks}
          newTaskLabel={newTaskLabel}
          setNewTaskLabel={setNewTaskLabel}
        />
        <AxiosTest />
      </div>
      <ArchivedList
        tasks={tasks}
        setTasks={setTasks}
        archivedTasks={archivedTasks}
        setArchivedTasks={setArchivedTasks}
      />
    </>
  );
}

export default App;

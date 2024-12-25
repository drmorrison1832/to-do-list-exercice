import { useState } from "react";
import TasksList from "./TasksList";
import AddNewTask from "./AddNewTask";
import ArchiveList from "./ArchiveList";
import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);

function App() {
  const [tasks, setTasks] = useState([]);
  const [archive, setArchive] = useState([]);
  const [newTaskLabel, setNewTaskLabel] = useState();

  return (
    <>
      <div>
        <TasksList
          tasks={tasks}
          setTasks={setTasks}
          archive={archive}
          setArchive={setArchive}
        />
      </div>
      <AddNewTask
        tasks={tasks}
        setTasks={setTasks}
        newTaskLabel={newTaskLabel}
        setNewTaskLabel={setNewTaskLabel}
      />
      <ArchiveList
        tasks={tasks}
        setTasks={setTasks}
        archive={archive}
        setArchive={setArchive}
      />
    </>
  );
}

export default App;

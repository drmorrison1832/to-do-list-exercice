import IsDoneCheckbox from "./IsDoneCheckbox";
import ArchiveTaskIcon from "./ArchiveTaskIcon";
import DeleteTask from "./DeleteTask";
import TaskName from "./TaskName";

const TasksList = (props) => {
  const { tasks, setTasks, isArchived, mustRetrieve, setMustRetrieve } = props;

  console.log(" TasksList", new Date().getMilliseconds());

  if (mustRetrieve) {
    return (
      <div className="tasks-list">
        <p>Loading content...</p>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="tasks-list">
        <p>Start adding tasks...</p>
      </div>
    );
  }

  return (
    <div className="tasks-list">
      {tasks.map((task, index) => {
        if (task.isArchived === isArchived) {
          return (
            <div className="task" key={task._id}>
              <label>
                <IsDoneCheckbox task={task} setMustRetrieve={setMustRetrieve} />
                <TaskName task={task} />
              </label>
              <ArchiveTaskIcon task={task} setMustRetrieve={setMustRetrieve} />
              <DeleteTask task={task} setMustRetrieve={setMustRetrieve} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default TasksList;

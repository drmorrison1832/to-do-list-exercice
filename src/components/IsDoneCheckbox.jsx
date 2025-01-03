import axios from "axios";

const IsDoneCheckbox = (props) => {
  const { task, setMustRetrieve } = props;

  console.log("  IsDoneCheckbox", new Date().getMilliseconds());

  return (
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

        setMustRetrieve(true);

        console.log(
          "IsDoneCheckbox : mustRetrieve set to true",
          new Date().getMilliseconds()
        );
      }}
    ></input>
  );
};

export default IsDoneCheckbox;

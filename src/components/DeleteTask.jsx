import axios from "axios";

const DeleteTask = (props) => {
  const { task, setMustRetrieve } = props;

  console.log("  DeleteTask", new Date().getMilliseconds());

  return (
    <span
      className="delete"
      onClick={() => {
        axios
          .delete(`http://localhost:3000/${task._id}`)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });

        setMustRetrieve(true);

        console.log(
          "DeleteTask: mustRetrieve set to true",
          new Date().getMilliseconds()
        );
      }}
    >
      X
    </span>
  );
};

export default DeleteTask;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const ArchiveTaskIcon = (props) => {
  const { task, setMustRetrieve } = props;

  console.log("  ArchiveTaskIcon", new Date().getMilliseconds());

  return (
    <FontAwesomeIcon
      icon={task.isArchived ? "fa-solid fa-rotate-left" : "fa-solid fa-trash"}
      onClick={() => {
        axios
          .put("http://localhost:3000/", {
            id: task._id,
            isArchived: !task.isArchived,
          })
          .then((response) => {})
          .catch((error) => {
            console.error(error);
          });

        setMustRetrieve(true);

        console.log(
          "ArchiveTaskIcon: mustRetrieve set to true",
          new Date().getMilliseconds()
        );
      }}
    />
  );
};

export default ArchiveTaskIcon;

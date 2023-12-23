import "./style.css";
import { ReactComponent as EditIcon } from "../../../assets/icons/edit.svg";

const TodoEdit = ({ toggleEdit }) => {
  return (
    <div onClick={toggleEdit} className="EditIconBox">
      <EditIcon className="EditIcon" />
    </div>
  );
};

export default TodoEdit;

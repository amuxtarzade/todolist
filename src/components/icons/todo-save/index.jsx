import "./style.css";
import { ReactComponent as SaveIcon } from "../../../assets/icons/save.svg";

const TodoSave = ({ saveTodo }) => {
  return (
    <div onClick={saveTodo} className="SaveIconBox">
      <SaveIcon className="SaveIcon" />
    </div>
  );
};

export default TodoSave;

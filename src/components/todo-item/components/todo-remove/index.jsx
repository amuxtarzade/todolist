import "./style.css";
import { ReactComponent as RemoveIcon } from "../../../../assets/icons/remove.svg";

const TodoRemove = ({ removeTodo }) => {
  return (
    <div onClick={removeTodo} className="RemoveIconBox">
      <RemoveIcon className="RemoveIcon" />
    </div>
  );
};
export default TodoRemove;

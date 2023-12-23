import "./style.css";
import { ReactComponent as Check } from "../../../../assets/icons/check.svg";

const TodoCheckBox = ({ isActive, checkTodo }) => {
  return (
    <div onClick={checkTodo} className="Box">
      <div className={isActive ? "CheckBox Active" : "CheckBox"}>
        {isActive && <Check className="Check" />}
      </div>
    </div>
  );
};

export default TodoCheckBox;

import "./style.css";
import Clipboard from "../../assets/images/Clipboard.png";

const TodoEmpty = () => {
  return (
    <div className="Empty">
      <img src={Clipboard} alt="" />
      <p>
        You don't have tasks registered yet <br />
        Create tasks and organize your to-do items
      </p>
    </div>
  );
};

export default TodoEmpty;

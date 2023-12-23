import "./style.css";

const ListInfo = ({ count, completed }) => {
  return (
    <div className="ListInfo">
      <div>
        <p>Tasks Created</p> <span>{count}</span>
      </div>
      <div>
        <p>Completed</p> <span>{completed}</span>
      </div>
    </div>
  );
};

export default ListInfo;

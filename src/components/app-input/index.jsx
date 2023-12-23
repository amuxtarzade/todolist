import "./style.css";

const AppInput = ({ inputRef, placeholder, onChange, onKeyUp }) => {
  return (
    <input
      className="AppInput"
      ref={inputRef}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      onKeyUp={onKeyUp}
    />
  );
};

export default AppInput;

const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default FormRow;

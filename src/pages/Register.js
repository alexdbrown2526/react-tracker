import { useState, useEffect } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={values.name} onChange={handleChange}></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Register;

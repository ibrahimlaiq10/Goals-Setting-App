import { FaUser } from "react-icons/fa";
import { useState, useEffect } from "react";
function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const onChange = (e) => {
    setFormData((previousState) => {
      return {
        ...previousState,
        [e.target.name]: e.target.value,
      };
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser />
          Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              value={name}
              placeholder="Enter your name"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            {" "}
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            {" "}
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            {" "}
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="form-control"
              value={confirmPassword}
              placeholder="Confirm password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;

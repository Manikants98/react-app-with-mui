import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../Config";
const SignIn = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: async () => {
      const reqBody = {
        email: values.email,
        password: values.password,
      };
      try {
        const response = await axiosInstance.post("/signin", reqBody);
        console.log(response.data);
        localStorage.setItem("name", response.data[0].name);
        localStorage.setItem("token", response.data[0].token);
        localStorage.setItem("email", response.data[0].email);
        alert("You are signed in.");
        navigate("/home");
      } catch (errors) {
        console.log(errors);
      }
    },
  });

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://placeimg.com/1000/800/arch")`,
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="flex w-1/3 border-white border p-7 px-10 text-white bg-opacity-25 backdrop-blur-md border-opacity-10 flex-col  justify-center items-center rounded"
        >
          <p className="text-white text-4xl font-semibold my-7 uppercase">
            Sign In
          </p>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              id="email"
              name="email"
              type="Email"
              value={values["email"]}
              onChange={handleChange}
              className="input bg-white bg-opacity-25 backdrop-blur-[2px] w-full"
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              autoComplete="off"
              id="password"
              name="password"
              type="password"
              value={values["password"]}
              onChange={handleChange}
              className="input bg-white bg-opacity-25 backdrop-blur-[2px]"
            />
            <label className="label">
              <span>
                You have't any account,
                <Link className="mx-1 hover:!text-blue-500" to="/signup">
                  Sign Up
                </Link>
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-primary !z-10 uppercase my-5 px-7"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SignIn;

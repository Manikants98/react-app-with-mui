import { Input } from "antd";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../Config";
const SignUp = () => {
  const navigate = useNavigate();
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    Confirm_password: "",
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: async () => {
      const reqBody = {
        name: values.first_name + " " + values.last_name,
        email: values.email,
        password: values.password,
      };
      try {
        const response = await axiosInstance.post("/user", reqBody);
        console.log(response.data);
        alert(response.data.message);
        navigate("/signin");
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
          backgroundImage: `url("https://source.unsplash.com/random")`,
        }}
      >
        <form
        autoComplete="off"
          onSubmit={handleSubmit}
          className="flex w-1/3 p-7 px-10 text-white bg-white bg-opacity-10 backdrop-blur-md flex-col justify-center items-center rounded"
        >
          <p className="text-white text-4xl font-semibold my-7 uppercase">
            Sign Up
          </p>
          <div className="flex justify-between gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">First Name</span>
              </label>
              <Input
                id="first_name"
                name="first_name"
                type="text"
                value={values["first_name"]}
                onChange={handleChange}
                className="input bg-white bg-opacity-25 backdrop-blur-[2px] w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">Last Name</span>
              </label>
              <Input
                id="last_name"
                name="last_name"
                type="text"
                value={values["last_name"]}
                onChange={handleChange}
                className="input bg-white bg-opacity-25 backdrop-blur-[2px]"
              />
            </div>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <Input
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
            <Input
              autoComplete="off"
              id="password"
              name="password"
              type="password"
              value={values["password"]}
              onChange={handleChange}
              className="input bg-white bg-opacity-25 backdrop-blur-[2px]"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white">Confirm Password</span>
            </label>
            <Input
              autoComplete="off"
              id="Confirm_password"
              name="Confirm_password"
              type="password"
              value={values["Confirm_password"]}
              onChange={handleChange}
              className="input bg-white bg-opacity-25 backdrop-blur-[2px]"
            />
            <label className="label">
              <span>
                Already have an acoount,
                <Link className="mx-1 hover:!text-blue-500" to="/signIn">
                  Sign In.
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

export default SignUp;

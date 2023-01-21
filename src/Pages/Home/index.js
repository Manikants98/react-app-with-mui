import React from "react";
import { Link } from "react-router-dom";
import CustomFooter from "../../Shared/CustomFooter";
import CustomHeader from "../../Shared/CustomHeader";

const Home = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://placeimg.com/1000/800/arch")`,
        }}
      >
        <CustomHeader />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello There</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to="/">
              <button className="btn">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
      <CustomFooter />
    </>
  );
};

export default Home;

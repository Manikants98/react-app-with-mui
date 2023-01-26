import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";
import Home from "./Pages/Home";
import SplashScreen from "./Pages/SplashScreen";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

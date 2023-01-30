import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";
import Users from "./Authentication/Users";
import Home from "./Pages/Home";
import SplashScreen from "./Pages/SplashScreen";
import CustomFooter from "./Shared/CustomFooter";
import CustomHeader from "./Shared/CustomHeader";
import Sidebar from "./Shared/CustomSidebar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route
            path="/home"
            element={
              <Home header={<CustomHeader />} footer={<CustomFooter />} />
            }
          />
          <Route path="/Layout" element={<Sidebar component={<Home />} />} />
          <Route path="/Users" element={<Sidebar component={<Users />} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

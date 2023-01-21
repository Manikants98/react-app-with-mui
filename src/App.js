import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SplashScreen from "./Pages/SplashScreen";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

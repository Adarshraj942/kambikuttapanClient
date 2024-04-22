import "./App.css";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import SinglePost from "./pages/singlePost/SinglePost";

import { Routes, Route } from "react-router-dom";
import { path } from "./paths/paths";
function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>

      <Routes>
        <Route path={path.home} element={<Home />} />
        <Route path={path.auth} element={<Auth />} />
        <Route path={path.profile} element={<Profile />} />
        <Route path={path.singlePost} element={<SinglePost />} />
      </Routes>
    </div>
  );
}

export default App;

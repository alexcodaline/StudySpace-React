import "./App.css";
import Main from "./components/Main";
import Posts from "./components/Posts";
import { BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Login from "./components/Login";
import SingleNews from "./components/SingleNews";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <nav className="menu">
          <NavLink
            className={({ isActive }) => (isActive ? "menuLinkActive" : "")}
            to="/main"
          >
            Main
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "menuLinkActive" : "")}
            to="/post"
          >
            Posts
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "menuLinkActive" : "")}
            to="/login"
          >
            Login
          </NavLink>
        </nav>

        <Routes>
        <Route path="/" element={<Login/>} />
          <Route path="/main" element={<Main />} />
          <Route path="/post" element={<Posts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post/:id" element={<SingleNews />} />
          <Route path="*" element={<h1>Page not found!</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

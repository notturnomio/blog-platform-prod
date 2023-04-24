import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AboutPage } from "../pages/AboutPage";
import { MainPage } from "../pages/MainPage";
import { AppRouter } from "./providers/router";

// import { useTheme } from "./providers/ThemeProvider";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <div>
        <button onClick={toggleTheme}>
          {theme === "dark" ? "Light Theme" : "Dark Theme"}
        </button>
      </div>
      <Link to={"/"}>Main Page</Link>
      <Link to={"/about"}>About Page</Link>
      <AppRouter />
    </div>
  );
};

export default App;

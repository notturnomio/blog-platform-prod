import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
      <div>
        <button onClick={toggleTheme}>
          {theme === "dark" ? "Light Theme" : "Dark Theme"}
        </button>
      </div>
    </div>
  );
};

export default App;

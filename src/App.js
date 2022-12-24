import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme")==="light" ? "dark" :"light"
  );

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme","dark")
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme","light");
    }
  };

  return (
    <div className="h-screen bg-blue-200 dark:bg-black">
      <nav className="w-full flex justify-center items-center h-24 bg-blue-400 dark:bg-slate-700">
        <h1>Tailwind CSS ile Dark Mode Yapımı</h1>
        <button
          onClick={changeTheme}
          className="bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-sm ml-4"
        >
          {theme} Mode
        </button>
      </nav>
    </div>
  );
}

export default App;

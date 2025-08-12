import { useState } from "react";

function Header() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    console.log("Theme toggled", theme);
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="fixed top-0 flex w-[80%] items-center justify-between bg-gray-400 p-4">
      <h1 className="text-3xl font-semibold">Manage your Tasks</h1>
      <input type="checkbox" name="theme" id="theme" onChange={toggleTheme} />
    </div>
  );
}

export default Header;

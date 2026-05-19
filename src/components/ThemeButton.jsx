"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeButton() {

  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="p-2 border rounded-full"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}
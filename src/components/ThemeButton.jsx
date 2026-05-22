"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@heroui/react";

export default function ThemeButton() {

  const { theme, setTheme } = useTheme();

  return (
     <Switch onChange={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {({isSelected}) => (
        <>
          <Switch.Control
            className={`h-[31px] w-[41px] bg-white-500 rounded-full ${isSelected ? "bg-white-500 shadow-white" : ""}`}
          >
            <Switch.Thumb
              className={`size-[20px] bg-white shadow-sm rounded-full ${isSelected ? "ms-[22px] shadow-lg" : ""}`}
            >
              <Switch.Icon>
                {isSelected ? (
                  <Moon className="size-4 text-gray-600" />
                ) : (
                  <Sun className="size-4 text-blue-600" />
                )}
              </Switch.Icon>
            </Switch.Thumb>
          </Switch.Control>
        </>
      )}
    </Switch>
  );
}
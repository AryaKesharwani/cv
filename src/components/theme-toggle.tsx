"use client";

import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";
import { Button } from "@/components/ui/button";

const ORDER = ["system", "light", "dark"] as const;
type Theme = (typeof ORDER)[number];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const current: Theme = mounted && theme && ORDER.includes(theme as Theme)
    ? (theme as Theme)
    : "system";

  const cycle = () => {
    const next = ORDER[(ORDER.indexOf(current) + 1) % ORDER.length];
    setTheme(next);
  };

  const Icon =
    current === "light"
      ? SunIcon
      : current === "dark"
        ? MoonIcon
        : MonitorIcon;

  const label =
    current === "light"
      ? "Switch to dark theme"
      : current === "dark"
        ? "Switch to system theme"
        : "Switch to light theme";

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className="size-8"
      onClick={cycle}
      aria-label={label}
      title={label}
    >
      <Icon className="size-4" aria-hidden="true" />
    </Button>
  );
}

import React from "react";
import Button from "../Button";

function getInitial(): "black"|"gray"{
  if (typeof document === "undefined") return "black";
  return (document.documentElement.getAttribute("data-bg") as any) || (localStorage.getItem("bgTheme") as any) || "black";
}

export default function BackgroundToggle(){
  const [mode, setMode] = React.useState<"black"|"gray">(getInitial());

  React.useEffect(()=> {
    document.documentElement.setAttribute("data-bg", mode);
    localStorage.setItem("bgTheme", mode);
  }, [mode]);

  const label = mode === "black" ? "Background: Black" : "Background: Gray";
  return (
    <Button variant="soft" size="sm" onClick={()=>setMode(mode==="black"?"gray":"black")} aria-label={label}>
      {label}
    </Button>
  );
}

export {};

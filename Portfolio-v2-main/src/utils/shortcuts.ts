export function bindShortcuts(){
  let g = false;
  const onKey = (e: KeyboardEvent) => {
    if (e.key.toLowerCase()==="g"){ 
      g = true; 
      setTimeout(()=>g=false, 800); 
      return; 
    }
    if (!g) return;
    if (e.key.toLowerCase()==="p"){ 
      document.querySelector("#project")?.scrollIntoView({behavior:"smooth"}); 
      g=false; 
    }
    if (e.key.toLowerCase()==="c"){ 
      document.querySelector("#contact")?.scrollIntoView({behavior:"smooth"}); 
      g=false; 
    }
  };
  window.addEventListener("keydown", onKey);
  return () => window.removeEventListener("keydown", onKey);
}

export {}

export function bindHoverVars(el: HTMLElement){
  const onMove = (e: MouseEvent) => {
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left)/r.width)*100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top)/r.height)*100}%`);
  };
  el.addEventListener("pointermove", onMove, { passive:true });
  el.addEventListener("pointerleave", ()=>{ 
    el.style.removeProperty("--mx"); 
    el.style.removeProperty("--my"); 
  }, { passive:true });
}

export {}

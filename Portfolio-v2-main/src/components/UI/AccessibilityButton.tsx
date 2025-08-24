import React from "react";
import {useA11y} from "../../a11y/A11yProvider";
import Button from "../Button";

export default function AccessibilityButton(){
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{position:"fixed", right:"16px", bottom:"16px", zIndex:60}}>
      <Button variant="soft" size="lg" onClick={()=>setOpen(true)} aria-label="Open accessibility panel">
        ♿️
      </Button>
      {open && <Panel onClose={()=>setOpen(false)} />}
    </div>
  );
}

function Panel({onClose}:{onClose:()=>void}){
  const {state, set, reset} = useA11y();
  
  React.useEffect(()=>{
    const onKey = (e:KeyboardEvent)=> { 
      if(e.key==="Escape") onClose(); 
    };
    window.addEventListener("keydown", onKey); 
    return ()=>window.removeEventListener("keydown", onKey);
  },[onClose]);

  return (
    <div 
      role="dialog" 
      aria-modal="true" 
      aria-label="Accessibility settings"
      style={{position:"fixed", inset:0, background:"rgba(0,0,0,.45)", display:"grid", placeItems:"center", zIndex:61}}
      onClick={onClose}
    >
      <div className="a11y-card" onClick={e=>e.stopPropagation()}>
        <header>
          <h3>Accessibility</h3>
        </header>
        <div className="a11y-grid">
          <Toggle label="High contrast" checked={state.highContrast} onChange={v=>set("highContrast",v)} />
          <Toggle label="Reduce motion" checked={state.reduceMotion} onChange={v=>set("reduceMotion",v)} />
          <Toggle label="Underline links" checked={state.underlineLinks} onChange={v=>set("underlineLinks",v)} />
          <Toggle label="Strong focus outline" checked={state.focusOutline} onChange={v=>set("focusOutline",v)} />
          <Toggle label="Pause background" checked={state.pauseBackground} onChange={v=>set("pauseBackground",v)} />
          <Toggle label="Dyslexia-friendly font" checked={state.dyslexic} onChange={v=>set("dyslexic",v)} />
          <div>
            <label className="a11y-label">Text size</label>
            <div className="a11y-row">
              <Button size="sm" onClick={()=>set("scale", Math.max(1, +(state.scale-0.1).toFixed(1)))}>
                -
              </Button>
              <div className="a11y-scale">{(state.scale*100).toFixed(0)}%</div>
              <Button size="sm" onClick={()=>set("scale", Math.min(1.3, +(state.scale+0.1).toFixed(1)))}>
                +
              </Button>
            </div>
          </div>
        </div>
        <footer className="a11y-actions">
          <Button variant="ghost" onClick={reset}>Reset</Button>
          <Button variant="primary" onClick={onClose}>Done</Button>
        </footer>
      </div>
    </div>
  );
}

function Toggle({label, checked, onChange}:{label:string; checked:boolean; onChange:(v:boolean)=>void}){
  return (
    <label className="a11y-toggle">
      <input type="checkbox" checked={checked} onChange={e=>onChange(e.target.checked)} />
      <span>{label}</span>
    </label>
  );
}

export {}

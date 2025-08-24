import React, {createContext, useContext, useEffect, useMemo, useState} from "react";

type A11yState = {
  highContrast: boolean; 
  reduceMotion: boolean; 
  underlineLinks: boolean;
  focusOutline: boolean; 
  pauseBackground: boolean;
  scale: number; // 1.0..1.3
  dyslexic: boolean;
};

const defaults: A11yState = { 
  highContrast:false, 
  reduceMotion:false, 
  underlineLinks:false,
  focusOutline:false, 
  pauseBackground:false, 
  scale:1.0, 
  dyslexic:false 
};

type Ctx = { 
  state:A11yState; 
  set<K extends keyof A11yState>(k:K, v:A11yState[K]):void; 
  reset():void; 
};

const C = createContext<Ctx>({state:defaults, set(){}, reset(){}});
export const useA11y = ()=> useContext(C);

const STORAGE_KEY = "a11yPrefs.v1";

export function A11yProvider({children}:{children:React.ReactNode}){
  const [state, setState] = useState<A11yState>(() => {
    try{ 
      const raw = localStorage.getItem(STORAGE_KEY); 
      return raw? {...defaults, ...JSON.parse(raw)} : defaults; 
    }catch{ 
      return defaults; 
    }
  });
  
  const api = useMemo<Ctx>(()=>({
    state,
    set:(k, v)=> setState(s=> ({...s, [k]: v})),
    reset:()=> setState(defaults)
  }),[state]);

  // reflect to <html data-*> + persist
  useEffect(()=>{
    const el = document.documentElement;
    const set = (name:string, on:boolean|number|string)=> on ? el.setAttribute(name, String(on)) : el.removeAttribute(name);
    
    set("data-a11y-hc", state.highContrast?1:"");
    set("data-a11y-rm", state.reduceMotion?1:"");
    set("data-a11y-ul", state.underlineLinks?1:"");
    set("data-a11y-focus", state.focusOutline?1:"");
    set("data-a11y-pausebg", state.pauseBackground?1:"");
    set("data-a11y-dys", state.dyslexic?1:"");
    
    // Text scaling via CSS variable (attr() not widely supported)
    if (state.scale && state.scale !== 1) {
      el.style.setProperty("--a11y-scale", String(state.scale));
    } else {
      el.style.removeProperty("--a11y-scale");
    }
    
    try{ 
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); 
    }catch{}
  },[state]);

  return <C.Provider value={api}>{children}</C.Provider>;
}

export default A11yProvider;
export {}

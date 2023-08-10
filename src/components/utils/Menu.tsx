
type ACTIONTYPE =
  | { type: "open"; }
  | { type: "close"; };


const initialState: { toggle: boolean } = { toggle: false };

const reducer = (state: typeof initialState , action: ACTIONTYPE) => {
  let { toggle } = state;
  
  switch (action.type) {
    case "open" :
      document.body.classList.add("menu-opened");
      toggle = true;
      return { toggle };

    case "close" :
      document.body.classList.contains("menu-opened") && document.body.classList.remove("menu-opened");
      toggle = false;
      return { toggle };

    default: 
      return initialState
  }
}

export { initialState, reducer };
export type { ACTIONTYPE };
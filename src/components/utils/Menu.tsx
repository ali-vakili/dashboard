
type ACTIONTYPE =
  | { type: "open"; }
  | { type: "close"; };


const initialState: { toggle: boolean } = { toggle: false };

const reducer = (state: typeof initialState , action: ACTIONTYPE) => {
  switch (action.type) {
    case "open" :
      document.body.classList.add("menu-opened");
      return {toggle: true};

    case "close" :
      document.body.classList.contains("menu-opened") && document.body.classList.remove("menu-opened");
      return {toggle: false};

    default: 
      return initialState
  }
}

export { initialState, reducer };
export type { ACTIONTYPE };
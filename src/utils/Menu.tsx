
type ActionType = { 
  type: "open" | "close"; 
}

type MenuToggleState = {
  toggle: boolean
}


const initialState = { toggle: false };

const reducer = (state: MenuToggleState , action: ActionType) => {
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
export type { ActionType, MenuToggleState };
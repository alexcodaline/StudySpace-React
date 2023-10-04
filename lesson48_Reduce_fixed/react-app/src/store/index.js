import { legacy_createStore } from "redux";

const couterReducer = (
  state = { coffee: 0, sugar: 0, isLoggedIn: false },
  action
) => {
  switch (action.type) {
    case "incrementCoffee":
      return {
        ...state,
        coffee: state.coffee + 1,
      };
    case "incrementSugar":
      return {
        ...state,
        sugar: state.sugar + 1,
      };
    case "decrementCoffee":
      return {
        ...state,
        coffee: state.coffee - 1,
      };
    case "decrementSugar":
      return {
        ...state,
        sugar: state.sugar - 1,
      };
    case "increase":
      return {
        ...state,
        coffee: state.coffee + action.number,
      };
    case "increaseSugar":
      return {
        ...state,
        sugar: state.sugar + action.number,
      };
    case "logIn":
      return {
        ...state,
        isLoggedIn: true,
      };
    case "logOut":
      return {
        ...state,
        isLoggedIn: false,
      };
    case "save":
      return {
        ...state,
        coffee: +action.setCoffee,
        sugar: +action.setSugar,
        isLoggedIn: true,
      };
    case "clear":
      return {
        ...state,
        coffee: 0,
        sugar: 0,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

const store = legacy_createStore(couterReducer);

export default store;

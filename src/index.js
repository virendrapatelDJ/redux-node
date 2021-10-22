const { createStore } = require("redux");

const initialState = { value: 10 };

const reducer = (state = initialState, action) => {
  console.log("Reducer Called..", action);

  const value = action.value || 1;

  if (action.type === "increment") {
    return {
      value: state.value + value,
    };
  }
  if (action.type === "decrement") {
    return {
      value: state.value - value,
    };
  }

  return state;
};

const store = createStore(reducer);
console.log(store.getState());

store.dispatch({ type: "increment" });

console.log(store.getState());

store.dispatch({ type: "decrement", value: 3 });
console.log(store.getState());

store.dispatch({ type: "decrement" });
console.log(store.getState());

store.dispatch({ type: "increment", value: 4 });

console.log(store.getState());

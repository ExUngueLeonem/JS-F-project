console.log('Hello redux');

const initialState = 0;

const reducer = (state, action) => {
  if (action.type === 'INC') {
    return state + 1;
  }
  return 0;
};

let state = reducer(initialState, {type: 'INC'});
console.log(state);
state = reducer(state, {type: 'INC'});
console.log(state);
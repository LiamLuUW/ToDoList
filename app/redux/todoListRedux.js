import {Alert} from 'react-native';

// The types of actions that you can dispatch to modify the state of the store
export const types = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  COMPLETE: "COMPLETE"
};

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

let nextToDoId = 0;

export const actionCreators = {
  addItem: item => {
    return { type: types.ADD, payload: item, id: nextToDoId++ };
  },

  removeItem: index => {
    return { type: types.REMOVE, id: index };
  },

  completeItem: index => {
    return { type: types.COMPLETE, id: index };
  }
};

const initial_state = [];

export const reducer = (state = initial_state, action) => {
  console.log(state);

  switch (action.type) {
    case types.ADD:
      const { payload } = action;
      var newItem = {
        id: action.id,
        text: payload,
        completed: false
      };
      return [...state, newItem];
    case types.COMPLETE:
      return state.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      });

    case types.REMOVE:
      const s = state.filter((item) => action.id != item.id);
      return s;
    
    default:
      return state;
  }
};

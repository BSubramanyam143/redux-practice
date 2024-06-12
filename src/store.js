import { createStore } from "redux";
import { combineReducers } from "redux";
const subbu = {
  balence: 0,
  fullname: "",
  mobile: null,
};


function Reducer(state = subbu, action) {
  switch (action.type) {
    case "credit":
      return { ...state, balence: state.balence + +action.payload };
    case "withdraw":
      return { ...state, balence: state.balence - +action.payload };
    case "mobileupdate":
      return { ...state, mobile: action.payload };
    case "name":
      return { ...state, fullname: action.payload };
    case "reset":
    default:
      return subbu;
      
  }
}
function transaction(state =[], action) {
  switch (action.type) {
    case "transaction":
      return [
        ...state,
        {
           id:action.payload.id,
          amount: action.payload.amount,
          type: action.payload.type,
          date: action.payload.time,
        } ]
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  account: Reducer,
  trans: transaction,
});
const store = createStore(rootReducer);
export default store;

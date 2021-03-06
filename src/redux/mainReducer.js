import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView205894Reducer from '../features/CalendarView205894/redux/reducers';
import Dashboard1205882Reducer from '../features/Dashboard1205882/redux/reducers'
import EmailAuth205878Reducer from '../features/EmailAuth205878/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView205894: CalendarView205894Reducer,
Dashboard1205882: Dashboard1205882Reducer,
EmailAuth205878: EmailAuth205878Reducer,

});
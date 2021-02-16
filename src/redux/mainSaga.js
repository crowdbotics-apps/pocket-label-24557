import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView205894Saga from '../features/CalendarView205894/redux/sagas';
import EmailAuth205878Saga from '../features/EmailAuth205878/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView205894Saga,
EmailAuth205878Saga,
    
  ]);
}
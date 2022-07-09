import { all } from 'redux-saga/effects';

import workout from './workouts/sagas';

export default function* rootSaga(): Generator {
  yield all([workout()]);
}

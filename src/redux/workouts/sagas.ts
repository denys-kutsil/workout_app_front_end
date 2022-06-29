import { SagaIterator } from 'redux-saga';
import { all, call, takeEvery, put } from 'redux-saga/effects';
import actions, { setWorkoutData } from './actions';
import getWorkoutDataService from './service';

function* getWorkoutData(): SagaIterator {
  const {
    data: { data },
  } = yield call(getWorkoutDataService);
  yield put(setWorkoutData(data.questions));
}

export default function* rootSaga() {
  yield all([takeEvery(actions.GET_WORKOUT_DATA, getWorkoutData)]);
}

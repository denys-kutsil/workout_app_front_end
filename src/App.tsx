import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { WorkoutView, TrackingView } from "./views";
import { getWorkoutData } from "./redux/workouts/actions";
import "./index.scss";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkoutData());
  }, []);

  return (
      <div className="mainContainer">
        <Router>
          <Switch>
            <Route path="/" component={WorkoutView} exact={true}/>
            <Route path="/tracking" component={TrackingView}/>
          </Switch>
        </Router>
      </div>
  );
}

export default App;

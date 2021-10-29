import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import styled from "styled-components";
import { WorkoutView, TrackingView, CompleteView } from "./views";
import { getWorkoutData } from "./redux/workouts/actions";
import { BackgroundDecorationBottom, BackgroundDecorationTop } from "./icons";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
`;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkoutData());
  }, [dispatch]);

  return (
      <MainContainer>
        <BackgroundDecorationTop/>
        <BackgroundDecorationBottom/>
        <Router>
          <Switch>
            <Route path="/" component={WorkoutView} exact={true}/>
            <Route path="/tracking" component={TrackingView}/>
            <Route path="/complete" component={CompleteView}/>
          </Switch>
        </Router>
      </MainContainer>
  );
}

export default App;

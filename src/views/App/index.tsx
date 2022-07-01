import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { WorkoutView, TrackingView, CompleteView } from '@/views';
import { BackgroundDecorationBottom, BackgroundDecorationTop } from '@/icons';
import useApp from './useApp';
import { MainContainer } from './styled-components';
import styles from './styles';

const App = () => {
  useApp();

  return (
    <MainContainer>
      <BackgroundDecorationTop style={styles.backgroundTop} />
      <BackgroundDecorationBottom style={styles.backgroundBottom} />
      <Router>
        <Switch>
          <Route path="/" component={WorkoutView} exact={true} />
          <Route path="/tracking" component={TrackingView} />
          <Route path="/complete" component={CompleteView} />
        </Switch>
      </Router>
    </MainContainer>
  );
};

export default App;

import React, { Component } from 'react';
import { connect } from 'react-redux';

// import CounterContainer from './CounterContainer';
import CounterListContainer from './CounterListContainer';

import * as actions from '../actions';
import Buttons from '../components/Buttons';
import getRandomColor from '../lib/getRandomColor';

class App extends Component {
  render() {
    const { onCreate, onRemove } = this.props;

    return (
      <div className="App">
        <Buttons onCreate={onCreate} onRemove={onRemove} />
        {/* <CounterContainer /> */}
        <CounterListContainer />
      </div>
    );
  }
}

const mapToDispatch = dispatch => ({
  onCreate: () => dispatch(actions.create(getRandomColor())),
  onRemove: () => dispatch(actions.remove()),
});

export default connect(
  null,
  mapToDispatch
)(App);

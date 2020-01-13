import React, { Component } from 'react';

import './App.css';
// import Counter from './components/Counter';
// import Palette from './components/Palette';
// import WaitingList from './components/WaitingList';
import PaletteContainer from './containers/PaletteContainer'; // **** (1) 불러오기
import CounterContainer from './containers/CounterContainer'; // **** (1) 불러오기
import WaitingListContainer from './containers/WaitingListContainer'; // **** 불러오기

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Palette selected="red" /> */}
        <PaletteContainer /> 
        {/* Palette **** (2) 대체하기 */}
        {/* <Counter value={0} color="red" /> */}
        <CounterContainer /> 
        {/* ****(2) 대체하기 */}
        {/* <WaitingList /> */}
        <WaitingListContainer /> 
        {/* **** 교체하기 */}
      </div>
    );
  }
}

export default App;

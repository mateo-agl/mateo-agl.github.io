import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reducerClock from './reducer';
import { createStore } from "redux";
import "./styles.css";
import Break from './components/Break';
import Display from './components/Display';
import Session from './components/Session';
import interval from './interval';

class Clock extends React.Component {
  countdown() {
    const timeHandler = () => {
      const state = store.getState();
      if(state.timeLeft > 0) {
        store.dispatch({ type: "COUNTDOWN" });
      } else {
        if(state.timerLbl === "Session") {
          store.dispatch({ 
            type: "CHANGE_TIME",
            time: state.break * 60,
            label: "Break"
          });

          this.alarm.play();
        } else {
          store.dispatch({ 
            type: "CHANGE_TIME",
            time: state.session * 60,
            label: "Session"
          });

          this.alarm.play();
        }
        this.alarm.play()
      }
    }

    this.counter = interval(timeHandler);
  }

  stopCountdown() {
    this.counter.stop()
  }

  reset() {
    this.stopCountdown();
    store.dispatch({ type: "RESET" });
  }
  render() {
    return (
      <div id="clock">
        <div id="main-title">25 + 5 Clock</div>
        <Break/>
        <Session/>
        <Display 
        run={this.countdown.bind(this)} 
        stop={this.stopCountdown.bind(this)}
        reset={this.reset.bind(this)}
        />
        <audio 
        id="beep" 
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        ref={(audio) => {
          this.alarm = audio;
        }}
        />
      </div>
    )
  }
}

const store = createStore(reducerClock);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Clock />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
import React from "react";
import { connect } from "react-redux";

const Display = (Display) => {
  return (
  <div 
  id="display">
    <label 
    id="timer-label">
      {Display.timerLbl}
    </label>
    <div 
    id="time-left">
      {Display.timeLeft}
    </div>
    <div 
    id="timer" 
    className="controls"
    >
      <i 
      id="start_stop"
      className="bi bi-play-fill"
      onClick={
        () => {
          Display.start_stop();
          if(Display.start === false) {
            Display.run();
          } else {
            Display.stop();
          }
        }
      }
      />
      <i 
      id="reset" 
      onClick={Display.reset} 
      className="bi bi-arrow-counterclockwise"
      />
    </div>
  </div>
)}

const timeConverter = time => {
  let minutes = parseInt(time / 60, 10);
  let seconds = parseInt(time % 60, 10);
  
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return minutes + ":" + seconds;
}

const mapDispatchToProps = dispatch => ({
  start_stop: () => dispatch({ type: "START_STOP" })
})

const mapStateToProps = state => ({
  timeLeft: timeConverter(state.timeLeft),
  timerLbl: state.timerLbl,
  start: state.start
})

export default connect(mapStateToProps, mapDispatchToProps)(Display);
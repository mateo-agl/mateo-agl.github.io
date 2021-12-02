const initialState = {
  break: 5,
  session: 25,
  timerLbl: "Session",
  timeLeft: 1500,
  start: false
}

const reducerClock = (state = initialState, action) => {
  switch(action.type) {
    case "BREAK_INCREMENT":
      return {
        ...state,
        break: state.break < 60 ? 
        state.break + 1 : state.break
      }
    case "BREAK_DECREMENT":
      return {
        ...state,
        break: state.break > 1 ? 
        state.break - 1 : state.break
      }
    case "SESSION_INCREMENT":
      return {
        ...state,
        session: state.session < 60 ? 
        state.session + 1 : state.session,
        timeLeft: state.session < 60 ? 
        (state.session + 1) * 60 : state.timeLeft
      }
    case "SESSION_DECREMENT":
      return {
        ...state,
        session: state.session > 1 ? 
        state.session - 1 : state.session,
        timeLeft: state.session > 1 ? 
        (state.session - 1) * 60 : state.timeLeft
      }
    case "START_STOP":
      return {
        ...state,
        start: !state.start
      }
    case "COUNTDOWN":
      return {
        ...state,
        timeLeft: state.timeLeft - 1
      }
    case "CHANGE_TIME":
      return {
        ...state,
        timeLeft: action.time,
        timerLbl: action.label
      }
    case "RESET":
      return initialState;
    default:
      return initialState;
  }
}

export default reducerClock;
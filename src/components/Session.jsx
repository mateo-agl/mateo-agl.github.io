import React from "react";
import { connect } from "react-redux";

const Session = (Session) => (
  <div id="session">
    <label id="session-label">Session Length</label>
    <div className="controls">
      <i id="session-decrement" onClick={Session.decrement} className="bi bi-arrow-down-short"/>  
      <label id="session-length">{Session.length}</label>
      <i id="session-increment" onClick={Session.increment} className="bi bi-arrow-up-short"/>
    </div>
  </div>
)
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: "SESSION_INCREMENT" }),
  decrement: () => dispatch({ type: "SESSION_DECREMENT" })
});

const mapStateToProps = state => ({
  length: state.session
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Session);
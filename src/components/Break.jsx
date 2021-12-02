import React from "react";
import { connect } from "react-redux";

const Break = (Break) => (
  <div id="break">
    <label id="break-label">Break Length</label>
    <div className="controls">
      <i id="break-decrement" onClick={Break.decrement} className="bi bi-arrow-down-short"/>
      <label id="break-length">{Break.length}</label>
      <i id="break-increment" onClick={Break.increment} className="bi bi-arrow-up-short"/>
    </div>
  </div>
)

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch({ type: "BREAK_INCREMENT" }),
    decrement: () => dispatch({ type: "BREAK_DECREMENT" })
});

const mapStateToProps = state => ({
  length: state.break
});

export default connect(mapStateToProps, mapDispatchToProps)(Break);
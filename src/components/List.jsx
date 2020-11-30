import React, { Component } from "react";
import { connect } from "react-redux";

class List extends Component {
  render() {
    const { dataUrls } = this.props;
    const result = !!dataUrls.length
      ? dataUrls.map((item) => (
          <li key={item.event_id}>
            <div>{item.title}</div>
          </li>
        ))
      : null;
    return <div>{result}</div>;
  }
}

const mapStateToProps = (state) => ({ dataUrls: state.dataUrls });

export default connect(mapStateToProps, null)(List);

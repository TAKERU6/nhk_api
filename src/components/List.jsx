import React, { Component } from "react";
import { connect } from "react-redux";

class List extends Component {
  render() {
    const { dataUrls } = this.props;
    const title = !!dataUrls.length
      ? dataUrls.map((item) => (
          <div key={item.event_id} className="program">
            <div className="title">番組名: {item.title}</div>
            <div className="content">番組内容: {item.content}</div>
            <div className="start_time">
              放送開始時刻: {item.start_time.slice(11, 16)}
            </div>
          </div>
        ))
      : null;
    return <div className="list">{title}</div>;
  }
}

const mapStateToProps = (state) => ({ dataUrls: state.dataUrls });

export default connect(mapStateToProps, null)(List);

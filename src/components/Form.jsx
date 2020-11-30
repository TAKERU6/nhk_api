import React, { Component } from "react";
import { connect } from "react-redux";
import getUrls from "../actions/getUrls";

class Form extends Component {
  state = { word: "", data: "" };

  handleChangeWord = (event) => this.setState({ word: event.target.value });

  handleChangeData = (event) => this.setState({ data: event.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const word = this.state.word;
    const data = this.state.data;
    this.props.getUrls(word, data);
  };

  render() {
    return (
      <form onSubmit={(e) => this.onSubmit(e)}>
        <select
          name="area"
          value={this.state.word}
          onChange={this.handleChangeWord}
        >
          <option value="">都道府県を選択</option>
          <option value="130">東京</option>
          <option value="270">大阪</option>
          <option value="400">福岡</option>
        </select>
        <input
          type="date"
          min="2020-11-29"
          max="2020-12-31"
          value={this.state.data}
          onChange={this.handleChangeData}
        ></input>
        <input type="submit" value="検索" />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUrls: (word, data) => dispatch(getUrls(word, data)),
  };
};

export default connect(null, mapDispatchToProps)(Form);

import React, { Component } from "react";
import { connect } from "react-redux";
import getUrls from "../actions/getUrls";

class Form extends Component {
  state = { area: "", date: "", genre: "" };

  handleChangeArea = (event) => this.setState({ area: event.target.value });

  handleChangeDate = (event) => this.setState({ date: event.target.value });

  handleChangeGenre = (event) => this.setState({ genre: event.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const dataArea = this.state.area;
    const dataDate = this.state.date;
    const dataGenre = this.state.genre;
    this.props.getUrls(dataArea, dataDate, dataGenre);
    this.setState({ area: "", date: "", genre: "" });
  };

  render() {
    const today = (dt) => {
      const year = dt.getFullYear();
      const month = ("00" + (dt.getMonth() + 1)).slice(-2);
      const day = ("00" + dt.getDate()).slice(-2);
      return year + "-" + month + "-" + day;
    };

    const getAfterDate = (n) => {
      const dt = new Date();
      dt.setDate(dt.getDate() + n);
      return today(dt);
    };

    return (
      <form onSubmit={(e) => this.onSubmit(e)}>
        <select
          name="genre"
          value={this.state.genre}
          onChange={this.handleChangeGenre}
        >
          <option value="">番組ジャンを選択</option>
          <option value="0000">ニュース</option>
          <option value="0300">ドラマ</option>
          <option value="0502">バラエティ</option>
        </select>
        <select
          name="area"
          value={this.state.area}
          onChange={this.handleChangeArea}
        >
          <option value="">都道府県を選択</option>
          <option value="130">東京</option>
          <option value="270">大阪</option>
          <option value="400">福岡</option>
        </select>
        <input
          type="date"
          min={today(new Date())}
          max={getAfterDate(40)}
          value={this.state.date}
          onChange={this.handleChangeDate}
        ></input>
        <input type="submit" value="検索" />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUrls: (dataArea, dataDate, dataGenre) =>
      dispatch(getUrls(dataArea, dataDate, dataGenre)),
  };
};

export default connect(null, mapDispatchToProps)(Form);

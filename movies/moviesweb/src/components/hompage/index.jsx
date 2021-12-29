import React, { Component } from "react";
import "./index.css";
class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toprated: [],
      toprated_results: [],
      popularList: [],
      // items: [],
      // iid: {},
    };
  }

  componentDidMount() {
    this.refreshList();

    // clearInterval(this.refreshList());
  }
  refreshList = () => {
    const api_key = "api_key=7768d9b2e7b144c9996e688064e2b36d";
    const base_url = "https://api.themoviedb.org/3";
    const page = "page=1";
    const top_rated =
      base_url + "/movie/top_rated?" + api_key + "&language=en-US&" + page;

    fetch(top_rated)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ toprated: data });
        this.setState({ toprated_results: data.results });
        console.log(this.state.toprated);
        console.log(this.state.toprated_results);
      });
  };
  render() {
    return (
      <div>
        <div>
          {this.state.toprated_results.map((item) => (
            <div key={item.id}>
              <h6>{item.title}</h6>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Homepage;

import React, { Component } from "react";
import "./index.css";
class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toprated: [],
      toprated_results: [],
      popularList: [],
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
    const img_base = "https://image.tmdb.org/t/p/w500";
    return (
      <div>
        <div className="section1">
          <div className="top-rated">
            <h1>Top Rated</h1>
            <div className="card-container">
              {this.state.toprated_results.map((item) => (
                <div className="cards" key={item.id}>
                  <img src={`${img_base}/${item.poster_path}`} alt="" />
                  <div className="card-bodys">
                    <h4>{item.title}</h4>
                    <p>{item.overview.slice(0, 270)}</p>
                    <div className="rating">
                      <span>{item.vote_average}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;

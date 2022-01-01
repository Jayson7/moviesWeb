import React, { Component } from "react";

import "./popular.css";
class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popular: [],
      popular_results: [],
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
    const other =
      "sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=flatrate";
    const top_rated =
      base_url + "/discover/movie?" + api_key + "&language=en-US&" + other;
    fetch(top_rated)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ popular: data });
        this.setState({ popular_results: data.results });
        console.log(this.state.popular);
        console.log(this.state.popular_results);
      });
  };
  render() {
    const img_base = "https://image.tmdb.org/t/p/w500";
    return (
      <div>
        <div className="section1">
          <div className="top-rated">
            <h1>Discover </h1>
            <div className="card-container">
              {this.state.popular_results.map((item) => (
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

export default Popular;

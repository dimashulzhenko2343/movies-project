import React, { Component } from "react";
import Movies from "../components/Movies/Movies";
import Search from "../components/Search/Search";
import Preloader from "./../components/Preloader/Preloader";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {
  state = {
    films: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ films: data.Search, loading: false });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  }

  searchMovues = (str, type = "all") => {
    this.setState({ loading: true });
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ films: data.Search, loading: false });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  };

  render() {
    const { films, loading } = this.state;
    return (
      <main className="container content">
        <Search searchMovues={this.searchMovues} />
        {loading ? <Preloader /> : <Movies films={films} />}
      </main>
    );
  }
}

export default Main;

import React, { Component } from "react";
import Movies from "../components/Movies/Movies";

class Main extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?s=The Godfather&type=game&apikey=fec9e352")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ films: data.Search });
      });
  }

  render() {
    const { films } = this.state;
    return (
      <main className="container content">
        {films.length ? <Movies films={films} /> : <h5>Loading...</h5>}
      </main>
    );
  }
}

export default Main;

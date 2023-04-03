import React from "react";
import "./Search.css";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  }


  handleFilter = (event) => {
    this.setState(() => ({type: event.target.dataset.type}), () => {
        this.props.searchMovues(this.state.search, this.state.type)
    })
  }

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovues(this.state.search, this.state.type);
    }
  };

  handleClick = (event) => {
    this.props.searchMovues(this.state.search, this.state.type);
  };

  render() {
    return (
      <>
        <div className="row">
          <div className="input-field col s12">
            <input
              className="validate"
              placeholder="Search"
              type="search"
              value={this.state.search}
              onChange={this.handleChange}
              onKeyDown={this.handleKey}
            />
            <button className="btn search_btn" onClick={this.handleClick}>
              Search
            </button>
          </div>
        </div>
        <div className="boxRadio">
          <p>
            <label>
              <input 
                className="with-gap" 
                name="type"
                type="radio"
                data-type="all" 
                onChange={this.handleFilter} 
                checked={this.state.type === 'all'}
              />
              <span>All</span>
            </label>
          </p>
          <p>
            <label>
              <input 
                className="with-gap" 
                name="type"
                type="radio"
                data-type="series"  
                onChange={this.handleFilter} 
                checked={this.state.type === 'series'}
              />
              <span>Series</span>
            </label>
          </p>
          <p>
            <label>
              <input 
                className="with-gap" 
                name="type"
                type="radio"
                data-type="movie"  
                onChange={this.handleFilter}
                checked={this.state.type === 'movie'}                
              />
              <span>Movies</span>
            </label>
          </p>
        </div>
      </>
    );
  }
}

export default Search;

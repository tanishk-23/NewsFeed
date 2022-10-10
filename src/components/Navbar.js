import React, { Component } from 'react';
import { Link } from "react-router-dom";
export class Navbar extends Component {
  // constructor(){
  //   super();
  //   this.state={
  //      text:'',
  //      items:[],
  //      categories:[]
  //   }
    

  // handleOnChange = (event) => {
  //   this.setState({text:event.target.value})
  //   console.log(this.state.text);
  //   this.setState({categories : ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']});
  //   this.setState({items:this.state.categories.filter(s=>s.includes(this.state.text))})
  //   console.log(this.state.items);
  //  };
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewzDaily
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/politics">
                    Politics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/crypto">
                    Crypto Currency
                  </Link>
                </li>
              </ul>
              {/* <form className="d-flex">
                <div class="dropdown">
                  <input
                    className="form-control me-2  dropdown-toggle"
                    id="dropdownMenuLink"
                    value={this.text}
                    role="input"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                    // type="search"
                    placeholder="Search"
                    aria-label="Search"
  
                    onInputCapture={this.handleOnChange}
                  />
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    {this.state.items.map((element)=>{
                      return <li>
                      <a class="dropdown-item" href="#">
                        {element}
                      </a>
                    </li>
                    })}
                  </ul>
                </div>
                <button className="btn btn-outline-light" type="submit">
                  Search
                </button>
              </form> */}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

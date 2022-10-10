import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 5,
    category: "general",
  };
  static PropsTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }
  async update() {
    this.props.setProgress(5)
    const url= `https://newsapi.in/newsapi/news.php?key=${this.props.apiKey}&category=${this.props.category}`
    this.setState({ loading: true });
    let data = await fetch(url,{mode:"cors"});
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.News,
      totalResults: parsedData.totalResults,
        loading: false,
    });
    this.props.setProgress(100)
  }
  async componentDidMount() {
    this.update();
  }
    // handlePrevClick = async () => {
    //   this.setState({
    //     page: this.state.page - 1,
    //   });
    //   this.update();
    // };
    // handleNextClick = async () => {
    //   this.setState({
    //     page: this.state.page + 1,
    //   });
    //   this.update();
    // };
  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1 , })
    const url= `https://newsapi.in/newsapi/news.php?key=${this.props.apiKey}&category=${this.props.category}`
    let data = await fetch(url,{mode:"cors"});
    let parsedData = await data.json();
    this.setState({
        
      articles: this.state.articles.concat(parsedData.News),
      totalResults: parsedData.totalResults,
    });
  };
  render() {
    return (
      <>
          <h2 className="text-center " style={{margin:'35px 0px','marginTop' :'70px'}}>Top Headlines</h2>
          {this.state.loading && <Spinner/>}
          
          
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner/>}
          >
            <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItem
                        title={element.title ? element.title.slice(0, 55) : ""}
                        description={
                          element.description
                            ? element.description.slice(0, 70)
                            : ""
                        }
                        imageUrl={element.image}
                        Url={element.url}
                        date={element.publishedAt}
                      />
                    </div>
                  );
                })}
            </div>
            </div>
            </InfiniteScroll>
        {/* <div className="container">
          <div className="d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevClick}
            >
              {" "}
              &larr;Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next&rarr;
            </button>
          </div>
        </div> */}
      </>
    );
  }
}

export default News;

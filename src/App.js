import './App.css'
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize=15;
  apiKey=process.env.REACT_APP_NEWS_API
  state={
    progress:0,
  }
  setProgress= (progress) =>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        color='#ffffff'//'#f11946'
        progress={this.state.progress}
      />
        <Navbar/>
        <Switch>
          <Route exact path="/"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={this.pageSize} category="india_english" country="in"/></Route>
          <Route exact path="/business"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="business" pageSize={this.pageSize} category="india_english_business" country="in"/></Route>
          <Route exact path="/entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={this.pageSize} category="india_english_entertainment" country="in"/></Route>
          <Route exact path="/general"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={this.pageSize} category="india_english" country="in"/></Route>
          <Route exact path="/politics"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="politics" pageSize={this.pageSize} category="india_english_politics" country="in"/></Route>
          <Route exact path="/science"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize={this.pageSize} category="india_english_science" country="in"/></Route>
          <Route exact path="/sports"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" pageSize={this.pageSize} category="india_english_sports" country="in"/></Route>
          <Route exact path="/crypto"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="crypto" pageSize={this.pageSize} category="india_english_cryptocurrency" country="in"/></Route>
         </Switch>
        </Router>
      </div>
    )
  }
}

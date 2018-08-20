import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Parser from 'rss-parser';


class App extends Component {

  constructor(props, context) {
    super(props, context);




    this.state = {
      mainContent: [],
      title:'A'
    };

    this.getFacebookContent = this.getFacebookContent.bind(this);

  }
  componentDidMount() {
    this.getFacebookContent();
  }

  getFacebookContent() {
    let self = this;
    let parser = new Parser();
    this.state.title ="XXXXX";
    parser.parseURL('http://nullmicgo.com/lunchtime/server.php')
    .then(feed => {
        feed.items.forEach(function(entry) {
          console.log(entry.title);

          this.setState({ title: entry.title });

        });
    });


  }

  render() {
    //  let containerContent = this.state.mainContent.map((form,i) => {
    //    console.log('test >'+form);
    //    return 'asdasdasd';
    // }); 
  

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
           { this.state.title }
        </p>
      </div>
    );
  }
}

export default App;

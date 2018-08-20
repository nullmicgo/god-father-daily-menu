import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Parser from 'rss-parser';


class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      title:'',
      description:''
    };
    this.getFacebookContent = this.getFacebookContent.bind(this);
  }
  componentDidMount() {
    this.getFacebookContent();
  }

  getFacebookContent() {
    let self = this;
    let parser = new Parser();
    parser.parseURL('http://nullmicgo.com/lunchtime/server.php')
    .then(feed => {



        feed.items.forEach(function(entry) {
               console.log(entry);
              if((self.state.title == '')&&(entry.title.includes("是日午餐"))){
                     self.setState({ title: entry.title });
                     self.setState({ description: entry.content });
              }
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
          <h1 className="App-title">{ this.state.title }</h1>
        </header>
        <p className="App-intro">


       <div dangerouslySetInnerHTML={{__html: this.state.description}} />



        </p>
      </div>
    );
  }
}

export default App;

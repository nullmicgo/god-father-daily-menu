import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Parser from 'rss-parser';
import {Animated} from "react-animated-css";

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

                  let content = entry.content;
                  content = content.replace("img", "img  id='johnson_image' ");


                     self.setState({ title: entry.title });
                     self.setState({ description: content });
              }
        });
    });


  }

  render() {
    //  let containerContent = this.state.mainContent.map((form,i) => {
    //    console.log('test >'+form);
    //    return 'asdasdasd';
    // }); 
    var sectionStyle = {
      backgroundImage: "url(pattern.png)"
    };

    return (
      <div className="App">
        <header className="App-header" style={ sectionStyle } >
          <Animated animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>
              <img src='store.png' className="App-logo" alt="logo" with="200" />
          </Animated>


          <h1 className="App-title">{ this.state.title }</h1>
        </header>
        <p className="App-intro">
          <Animated animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>
              <div dangerouslySetInnerHTML={{__html: this.state.description}} />

          </Animated>
        </p>
      </div>
    );
  }
}

export default App;

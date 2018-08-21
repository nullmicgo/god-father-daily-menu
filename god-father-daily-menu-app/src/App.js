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




        <p>
          <h1>半島冰室</h1>
        </p>
        <p className="App-intro">
          <Animated animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>
              <div dangerouslySetInnerHTML={{__html: this.state.description}} />

          </Animated>
        </p>

        <p className="store_b">
            <h1>大澳德發</h1>
            <br/>
              <Animated animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>
              <img src="https://dyn.web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.11540-24%2F39357607_191386494950728_8903738479037382656_n.jpg%3Foe%3D5B7F8809%26oh%3Dec89443a4d3809d310b23542d05aea9c&t=l&u=85265146779%40c.us&i=1534757793"></img>
              </Animated>
        </p>



      </div>

    );
  }
}

export default App;

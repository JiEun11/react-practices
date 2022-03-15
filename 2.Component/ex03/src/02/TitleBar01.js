import React, { Component } from 'react'

class TitleBar01 extends Component {

  constructor() {
    super(...arguments);
    // this.no VS this.state.no
    // this.no = 0;
    this.state = {
      no:0
    };
  }

  onClickHandler(){
    // this.no VS this.state.no
    // this.no++;
    // console.log(`TitleBar01 Clicked! ${this.no}`);
    this.setState({
      no: this.state.no + 1
    });
    console.log(`TitleBar01 Clicked! ${this.state.no}`);
  }

  render(){
    return (
      <h1
        style={{cursor: 'pointer'}}
        onClick={this.onClickHandler.bind(this)}>
        ex03: Functional Event Handler(Class Component)
        <br/>
        { 
          //this.no 
          this.state.no
        }

      </h1>
    )
  }
}

export default TitleBar01
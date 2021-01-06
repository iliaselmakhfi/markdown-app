import React, {Component} from 'react'
import './App.css';

import marked from 'marked'

import {sampleText} from './sampleText'

class App extends Component {

  state = {
    text : sampleText
  }

  handleArea = event => {
    const text = event.target.value
    this.setState({text})
  }

  handleText = text =>  {
    const __html = marked(text, {sanitize: true})
    return {__html}
  }


  render(){
    return (
      <div className='container'>
        <div className='row'>
          <div className='.col-lg-6'>
            <textarea defaultValue={this.state.text} onChange={this.handleArea} className='form-control' rows='35'/>
          </div>
          <div className='.col-lg-6'>
            <div dangerouslySetInnerHTML={this.handleText(this.state.text)}>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

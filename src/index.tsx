import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

class Main extends Component {
  render() {
    return (
     <App />
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('root'))

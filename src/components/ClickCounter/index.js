// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncreament = () => {
    const {count} = this.state
    this.setState({count: count + 1})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="header">
          The button has been clicked <br />
          <span className="span">{count}</span> times
        </h1>
        <p className="para">Click the button to increase the count </p>
        <button className="button" onClick={this.onIncreament}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter

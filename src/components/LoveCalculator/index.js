import {Component} from 'react'
import './index.css'

class LoveCalculator extends Component {
  state = {yourName: '', yourLName: '', randomNum: 0}

  onClickGenerateNum = () => {
    const min = 70
    const max = 100

    const newRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min

    this.setState({randomNum: newRandomNumber})
  }

  onChangeName = event => {
    this.setState({yourName: event.target.value})
  }

  onChangeLoverName = event => {
    this.setState({yourLName: event.target.value})
  }

  onClickReset = () => {
    this.setState({yourName: '', yourLName: '', randomNum: ''})
  }

  render() {
    const {yourName, yourLName, randomNum} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Love Calculator</h1>
        <div className="card-container">
          <label htmlFor="yourName" className="label-el">
            Your Name
          </label>
          <input
            type="text"
            id="yourName"
            className="input"
            value={yourName}
            onChange={this.onChangeName}
          />
          <label htmlFor="yourLName" className="label-el">
            Your Lover Name
          </label>
          <input
            type="text"
            id="yourLName"
            className="input"
            value={yourLName}
            onChange={this.onChangeLoverName}
          />
          <div>
            <button
              type="button"
              className="btn"
              onClick={this.onClickGenerateNum}
            >
              Calculate
            </button>
            <button className="btn" type="button" onClick={this.onClickReset}>
              Reset
            </button>
          </div>
        </div>
        <div className="bg-container">
          <p className="result">{`${yourName} and ${yourLName} has ${randomNum}% of Love`}</p>
        </div>
      </div>
    )
  }
}

export default LoveCalculator

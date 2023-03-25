import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    cardState: true,
    container: 'dark-cont',
    heading: 'dark-head',
    button: 'dark-btn',
    buttonText: 'Light Mode',
  }

  onLightMode = () => {
    const {cardState} = this.state
    if (cardState === true) {
      this.setState({
        cardState: false,
        container: 'light-cont',
        heading: 'light-head',
        button: 'dark-btn',
        buttonText: 'Dark Mode',
      })
    } else {
      this.setState({
        cardState: true,
        container: 'dark-cont',
        heading: 'dark-head',
        button: 'dark-btn',
        buttonText: 'Light Mode',
      })
    }
  }

  render() {
    const {container, heading, button, buttonText} = this.state
    return (
      <div className="bg-container">
        <div className={container}>
          <h1 className={heading}>Click To Change Mode</h1>
          <button type="button" className={button} onClick={this.onLightMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode

// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const backgroundColor = isDarkMode ? 'dark-bg' : 'light-bg'
    const textButton = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="container">
        <div className={`card ${backgroundColor}`}>
          <h1 className="heading"> Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.onClickButton}>
            {textButton}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode

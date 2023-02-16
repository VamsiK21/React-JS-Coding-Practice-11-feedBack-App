// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    givenFeedback: false,
  }

  onClicked = () => {
    this.setState({
      givenFeedback: true,
    })
  }

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="content-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-container">
          {emojis.map(eachItem => (
            <li key={eachItem.id} className="list-item">
              <button
                className="button-img"
                type="button"
                onClick={this.onClicked}
              >
                <img
                  className="image"
                  src={eachItem.imageUrl}
                  alt={eachItem.name}
                />
              </button>
              <p className="emoji-name">{eachItem.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankyou-container">
        <img className="image" src={loveEmojiUrl} alt="love emoji" />
        <h1 className="heading">Thank You</h1>
        <p className="emoji-name">
          We will use your feedback to improve our customer service performance
        </p>
      </div>
    )
  }

  render() {
    const {givenFeedback} = this.state

    return (
      <div className="bg-container">
        <div className="feedback-Card">
          {givenFeedback
            ? this.renderThankYouScreen()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback


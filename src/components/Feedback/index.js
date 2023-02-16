// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    givenFeedback: false,
  }

  emojiClicked = () => {
    this.setState({
      givenFeedback: true,
    })
  }

  render() {
    const {resources} = this.props
    const {givenFeedback} = this.state
    const {emojis, loveEmojiUrl} = resources

    console.log(givenFeedback)
    return (
      <div className="bg-container">
        {givenFeedback ? (
          <div className="content-container">
            <img className="image" src={loveEmojiUrl} />
            <p className="heading">Thank you</p>
            <p className="emoji-name">
              We will use your feedback to improve our customer service
              performance
            </p>
          </div>
        ) : (
          <div className="content-container">
            <h1 className="heading">
              How satisfied are you with our customer service performance?
            </h1>
            <ul className="emoji-container">
              {emojis.map(eachItem => (
                <li key={eachItem.id} className="list-item">
                  <img
                    onClick={this.emojiClicked}
                    className="image"
                    src={eachItem.imageUrl}
                  />
                  <p className="emoji-name">{eachItem.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback

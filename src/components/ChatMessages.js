import React, { Component} from 'react'

class ChatMessages extends Component {

  render() {
    return (
      <div>
        {this.props.messages.map((message, i) => {
          return (
            <div key={i}>
                <span>{message.sentBy ? message.sentBy.name : 'Anonymous'}</span>
                <p>{message.text}</p>
            </div>
            )
          })
        }
        <div style={ {float:"left", clear: "both"} }
             ref={el => { this.props.endRef(el) }}></div>
      </div>
    )
  }

}

export default ChatMessages
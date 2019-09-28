import React, { Component} from 'react'

class ChatInput extends Component {

  render() {
    return (
      <div className="type_msg">
        <div className="input_msg_write">
          <input
            className="write_msg"
            placeholder='Enter your chat message...'
            type='text'
            value={this.props.message}
            autoFocus={true}
            onChange={(e) => this.props.onTextInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.keyCode === 13) { // ENTER
                this.props.onSend()
                this.props.onResetText()
              }
            }}
          />
        </div>
      </div>
    )
  }
}

export default ChatInput

import React, { Component} from 'react'

class ChatMessages extends Component {

  render() {
    return (
      <div className='msg_history'>
        {this.props.messages.map((message, i) => {
          return (
            <div key={i}>
              {message.sentBy.id === this.props.userId ? 
                <div className='outgoing_msg'>
                  <div className='sent_msg'>
                    <span className="time_date">{message.sentBy ? message.sentBy.name : 'Anonymous'}</span>
                    <p>{message.text}</p>
                  </div>
                </div>
              :
                <div className='incoming_msg'>
                  <div className='received_msg'>
                    <div className="received_withd_msg">
                      <span className="time_date">{message.sentBy ? message.sentBy.name : 'Anonymous'}</span>
                      <p>{message.text}</p>
                    </div>
                  </div>
                </div>
              }
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
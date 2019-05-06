import React from "react";
import MessageInput from './MessageInput.js'
import axios from 'axios'

class MessageBoard extends React.Component{
  constructor(props){
    super(props)
  }
  postMessage(messageText){
    if(!messageText){
        return
    }
    axios.post('/messageboard/message', {
        messageText: messageText
    })
    .then(response => {
        console.log(response)
    })
  }

  handleMessageSubmit = (event) => {
    this.postMessage(document.getElementById('new-message').value)
    event.preventDefault()
  }
  render() {
    return (
        <MessageInput handleMessageSubmit={this.handleMessageSubmit}/>

    );
  }
}

export default MessageBoard;
import React from 'react';
import styled from 'styled-components'
import MessageForm from './Components/MessageForm/index'
import Message from './Components/Message/index'

const Main = styled.div`
   max-width: 600px;
  height: 100vh;
  border: 1px solid black;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #e5ddd5;
`

const MensagemContainer = styled.div`
 flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
`



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      messages: []
    }
  }

  addMessage = (message) => {
    this.setState({ messages: [...this.state.messages, message] })
  }

  deleteMessage = (message) => {
    this.setState({ messages: this.state.messages.filter(msg => msg !== message) })
  }

  render() {
    return (
      <Main>
          <MensagemContainer>
            {
              this.state.messages.map((message, index) => <Message deleteMessage={this.deleteMessage} message={message} key={index}></Message>)
            }
          </MensagemContainer>
          <MessageForm addMessage={this.addMessage}></MessageForm>
      </Main>
    );
  }
}

export default App;
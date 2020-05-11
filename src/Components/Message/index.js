import React from 'react';
import styled from 'styled-components'

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`

const MessageBox = styled.div`
  max-width: 40%;
  height: 100%;
  padding: 10px 15px;
  border-radius: ${props => {
    if(props.position === 'right') {
      return '5px 5px 0 5px;'

    } else {
      return '5px 5px 5px 0;' 
    }
  }};
  text-align: ${props => props.position};
  align-self: ${props => {
    if(props.position === 'right') {
      return 'flex-end;'

    } else {
      return 'flex-start;' 
    }
  }};
  display: flex;
  flex-direction: column;
  background-color: ${props => {
    if(props.position === 'right') {
      return '#dcf8c6'
    } else {
      return '#ffffff'
    }
  }};
  box-shadow: 0 1px 0.5px rgba(0,0,0,.13);
`

const UsernameContainer = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
`

class Message extends React.Component {
  constructor(props) {
    super(props)
  }

  onDoubleClick = () => {
    if (window.confirm('Tem certeza que deseja deletar essa mensagem?')) {
      this.props.deleteMessage(this.props.message)
    }
  }

  render() {
    let position
    let username 

    if(this.props.message.user === 'eu') {
      position = 'right'
    } else {
      position = 'left'
      username = <UsernameContainer>{this.props.message.user}</UsernameContainer>
    }

    return (
      <MessageContainer onDoubleClick={this.onDoubleClick}>
        <MessageBox position={position}>
          {username}
          {this.props.message.text}
        </MessageBox>
      </MessageContainer>
    );
  }
}

export default Message;
import React from 'react';
import styled from 'styled-components'

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 100px 1fr 75px;
  gap: 10px;
  height: 60px;
  padding: 10px;
`

const InputUser = styled.input`
  width: 100px;
  padding: 5px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
`

const InputText = styled.input`
  flex: 1;
  padding: 8px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
`

const SendButton = styled.button`
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
`

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userValue: "",
            textValue: "",
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }



    onSendMessage = (event) => {
        event.preventDefault()
        const message = {
            user: this.state.userValue,
            text: this.state.textValue
        }

        this.props.addMessage(message)

        this.setState({ textValue: '' })
    }




    render() {
        return (
            <FormContainer onSubmit={this.onSendMessage}>
                <InputUser
                    type="text"
                    placeholder={'Usuário'}
                    name="userValue"
                    onChange={this.handleChange}
                />
                <InputText
                    type="text"
                    placeholder={'Mensagem'}
                    name="textValue"
                    onChange={this.handleChange}
                    value={this.state.messageValue} />
                <SendButton>Enviar</SendButton>
            </FormContainer>
        )
    }
}

export default MessageForm;
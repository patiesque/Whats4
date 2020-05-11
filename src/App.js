import React from 'react';
import './App.css';
import styled from 'styled-components'
import Formulario from './Components/index'

const Main = styled.div`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
 width: 600px;
 height: 99.5vh;
 border: 1px solid black;
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
`

const MensagemContainer = styled.div`
 display: flex;
 flex-direction: column;
 padding: 20px;
`

class App extends React.Component{
  constructor(){
    super()

    this.state = {
      mensagens:[]
    }
  }
adicionarMensagem = (texto) => {
  this.setState({mensagens: [...this.state.mensagens, texto ]})
}

render(){
return (
  <Main>
    <Container>
      <MensagemContainer>
        {
         this.state.mensagens.map((texto) => <p>{texto.usuarioenviar}{': ' + texto.mensagemenviar}</p>)
        }
      </MensagemContainer>
      <Formulario adicionarMensagem={this.adicionarMensagem}></Formulario>
    </Container>
  </Main>
);
}
}

export default App;
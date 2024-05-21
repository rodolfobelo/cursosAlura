// import './estilo.css';
import logo from '../../imagens/logo.svg';
import styled from 'styled-components'

const LogoDiv = styled.div `
  display: flex;
  align-items: center;
  /* font-size: 100%; */
`

const LogoImg = styled.img `
  margin-right: 10px;
`

function Logo() {
    return (
        <LogoDiv>
          <LogoImg src={logo} alt='logo'></LogoImg>
          <p><strong>Alura</strong> Books</p>
        </LogoDiv>
    )
}

export default Logo;
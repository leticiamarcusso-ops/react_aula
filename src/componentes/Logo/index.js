import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoDiv = styled.div`
  display: flex;
  font-size: 30px;
`
const LogoImg = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <LogoDiv>
            <LogoImg src={logo} alt='logo'></LogoImg>
            <strong><p>SENAI Books</p></strong>
        </LogoDiv>
    )
}

export default Logo
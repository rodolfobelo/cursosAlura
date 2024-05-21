// import './estilo.css';

import Logo from '../Logo'
import OpcaoHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import styled from 'styled-components'

const HeaderComponents = styled.header `
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderComponents>
            <Logo />
            <OpcaoHeader />
            <IconesHeader />
        </HeaderComponents>
    )
}

export default Header
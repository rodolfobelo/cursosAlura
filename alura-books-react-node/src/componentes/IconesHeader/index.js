import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'

import styled from 'styled-components';

const Icone = styled.li `
    margin: 40px;
    width: 15px;
`
const IconesContainer = styled.ul `
    display: flex;
    align-items: center;
`

const icones = [perfil, sacola];

function IconesHeader() {
    return (
        <IconesContainer>
            {icones.map((icone) => (
                <Icone><img src={icone}></img></Icone>
            ))}
        </IconesContainer>
    )
}

export default IconesHeader;
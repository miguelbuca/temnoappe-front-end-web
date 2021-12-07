import { Continer, Image, Title } from './styles'


const logo = require('../../../assets/image/logo.PNG')

const Nav = () => {
    return (
        <Continer>
            <Image src={logo?.default} />
            <Title>Dashboard</Title>
        </Continer>
    )
}

export default Nav

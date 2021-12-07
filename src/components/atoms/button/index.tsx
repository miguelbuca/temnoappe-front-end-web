import { ButtonProps } from '../../../interface/components'
import { Container } from './styles'

const Button = ({ children,title, ...args }:ButtonProps) => {
    return (
        <Container onClick={args.onClick}>
            {children && !title && children}
            {!children && title && title}
        </Container>
    )
}

export default Button

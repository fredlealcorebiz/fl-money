import logoImg from '../assets/logo.svg'
import { Container, Content } from './styles'

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="fl money" />
                <button type="button">
                     Nova transação
                </button>
            </Content>
        </Container>
    )
}
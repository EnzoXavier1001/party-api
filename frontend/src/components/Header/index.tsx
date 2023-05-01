import * as C from './styles'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <C.Header>
        <C.Navbar>
            <h1>Party Time!</h1>
            <C.NavbarList>
                <Link to="/">Minhas Festas</Link>
                <Link to="/party/new">Criar Festa</Link>
            </C.NavbarList>
        </C.Navbar>
    </C.Header>
  )
}

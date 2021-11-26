import './Menu.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Quem somos?</Link>
                </li>
                <li>
                    <Link to="/Cardapio">Cardápio</Link>
                </li>
                <li>
                    <Link to="/Localizacao">Localização</Link>
                </li>
            </ul>
        </nav>
    </aside>
)
export default Menu
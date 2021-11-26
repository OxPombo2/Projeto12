import './Content.css'
import React from "react"
import { Switch, Route } from 'react-router-dom'
import Quem from '../../views/contents/Quem'
import UseState from '../../views/contents/UseState'
import Localizacao from '../../views/contents/Localizacao'
import Cardapio from '../../views/contents/Cardapio'
import NaoEncontrado from '../../views/contents/NaoEncontrado'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Quem />
            </Route>
            <Route path="/Cardapio">
                <Cardapio />
            </Route>
            <Route path="/Localizacao">
                <Localizacao />
            </Route>
            <Route path="/Cardapio">
                <Cardapio />
            </Route>
            <Route path="*">
                <NaoEncontrado />
            </Route>
        </Switch>
    </main>
)
export default Content
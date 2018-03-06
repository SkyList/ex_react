import React from 'react'
import ReactDOM from 'react-dom'
import { Primeiro, Segundo } from './componente'
import SilvaFamily from './silvaFamily'
import Family from './family'
import Member from './member'

ReactDOM.render(
        <Family>
            <h1>Familia</h1>
            <Member name='Matheus' lastName='Pantoja'/>
        </Family>
    ,document.getElementById('app')
)


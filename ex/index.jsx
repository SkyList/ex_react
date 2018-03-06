import React from 'react'
import ReactDOM from 'react-dom'
import { Primeiro, Segundo } from './componente'
import SilvaFamily from './silvaFamily'
import Family from './family'
import Member from './member'

ReactDOM.render(
        <Family lastName='Pantoja'>
            <Member name='Matheus'/>
            <Member name='Michelle'/>
            <Member name='Marcio'/>
        </Family>
    ,document.getElementById('app')
)


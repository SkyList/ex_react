import React from 'react'
import ReactDOM from 'react-dom'
import { Primeiro, Segundo } from './componente'
import SilvaFamily from './silvaFamily'
import Family from './family'
import Member from './member'
import ClassComponent from './classComponent'

ReactDOM.render(
    <ClassComponent label='Contador' initialValue={10}/>
    ,document.getElementById('app')
)


import React from 'react'
import {childrenWitchProps} from '../utils/reactUtils'
export default props => (
    <div>
        <h1>Família</h1>
        { childrenWitchProps(props.children, props) }
    </div>
)
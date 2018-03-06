import React from 'react'

function childrenWitchProps(children, props) {
    React.Children.map(props.children,
        child => React.cloneElement(child, {...props}))
}

export { childrenWitchProps }
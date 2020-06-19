import React from 'react'

const Button = (props) => {
    return (
        <button className={`btn btn-${props.color} ${props.textStyle}`}>
            {props.text}
        </button>
    )
}

export default Button

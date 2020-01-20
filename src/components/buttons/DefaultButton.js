import React from 'react'
import "./DefaultButton.scss"

const DefaultButton = ({ children, isGoogleSignIn, ...otherProps }) => {
    return (
        <button className={isGoogleSignIn ? "google-sign-in custom-button" : 'custom-button'} {...otherProps}>
            {children}
        </button>
    )
}

export default DefaultButton

import React, { useState } from 'react'
import "./SignIn.scss"
import FormInput from '../form-input/FormInput'
import DefaultButton from '../buttons/DefaultButton'
import { signInWithGoogle } from "../../firebase/firebase-utils"

const SignIn = () => {
    const [signInDetails, setSignInDetails] = useState({ email: "", password: "" })

    const handleSubmit = event => {
        event.preventDefault();
        setSignInDetails({ email: "", password: "" })
    }

    const handleChange = event => {
        const { value, name } = event.target
        setSignInDetails({ ...signInDetails, [name]: value })
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" name="email" type="email" value={signInDetails.email} required={true} handleChange={handleChange} />
                <FormInput label="Password" name="password" type="password" email="password" value={signInDetails.password} required={true} handleChange={handleChange} />
                <div className="buttons">
                    <DefaultButton type="submit" >Sign in</DefaultButton>
                    <DefaultButton isGoogleSignIn={true} onClick={signInWithGoogle} >Sign in with Google</DefaultButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn

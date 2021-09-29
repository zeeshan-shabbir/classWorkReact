import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/context'

export default function Login() {
    const { state, dispatch } = useContext(GlobalContext);  
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const handler = (event) => {
        event.preventDefault();
        let userObj = {
            password,
            email,
        }
        console.log("LOGIN",userObj);
        dispatch({ type: "LOGIN", payload: userObj });
    }

    return (
        <div>
        <form onSubmit={handler}>
            <div>
                <label htmlFor="userEmail">
                    <span className="labelName">userEmail:</span> <input type="email" placeholder="userEmail " id="userEmail" required onChange={(event) => { setEmail(event.target.value) }} />
                </label>
                <br />
                <label htmlFor="userpassword">
                    <span className="labelName"> password:</span> <input type="password" placeholder="userpassword" id="userpassword" required onChange={(event) => { setPassword(event.target.value) }} />
                </label>
                <br />
                <div>
                    <input type="submit" value="LOG IN" className="signUp" />
                </div>
            </div>
        </form>
    </div>
    )
}

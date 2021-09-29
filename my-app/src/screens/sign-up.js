import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/context'
import "../App.css"
export default function Signup() {
    const { state, dispatch } = useContext(GlobalContext);
    const [userName, setuserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [role, setrole] = useState('');
    const handler = (event) => {
        event.preventDefault();
        alert("working")
        let userObj = {
            userName,
            password,
            email,
            role,
        }
        // console.log("sign",userObj);
        dispatch({ type: "SIGNUP", payload: userObj });
    }

    return (
        <div>
            <form onSubmit={handler}>
                <div>
                    <label htmlFor="userName">
                        <span className="labelName">userName:</span>  <input type="text" placeholder="user name " id="userName" required onChange={(event) => { setuserName(event.target.value) }} />
                    </label>
                    <br />
                    <label htmlFor="userEmail">
                        <span className="labelName">userEmail:</span> <input type="email" placeholder="userEmail " id="userEmail" required onChange={(event) => { setEmail(event.target.value) }} />
                    </label>
                    <br />
                    <label htmlFor="userpassword">
                        <span className="labelName"> password:</span> <input type="password" placeholder="userpassword" id="userpassword" required onChange={(event) => { setPassword(event.target.value) }} />
                    </label>
                    <br />
                    <label for="userRole">userRole:
                    
                    <select name="Role" id="userRole" className="dd" required onChange={(event) => { setrole(event.target.value) }}>
                        <option value="trainer">trainer</option>
                        <option value="student">student</option>
                       
                    </select>
                    </label>

                    {/* <label htmlFor="userRole">
                        <span className="labelName">userRole:</span>  <input type="text" placeholder="userRole" id="userRole" required onChange={(event) => { setrole(event.target.value) }} />
                    </label> */}
                    <div>
                        <input type="submit" value="sign Up" className="signUp" />
                    </div>
                </div>
            </form>
        </div>
    )
}

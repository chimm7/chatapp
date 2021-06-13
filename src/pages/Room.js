import React, { useState } from 'react'
import firebase from '../config/firebase'

// import Login from './Login'
// import SignUp from './SignUp'

const Room = () => {
    const [messages, setMessages] = useState(null)
    const [value, setValue] = useState('')
    return (
        <>
            <h1>Room</h1>
            <ul>
                <li>
                    sample user : sample message
                </li>
            </ul>
            <form>
                <input
                    type='text'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button type='submit'>送信</button>
            </form>
            <button onClick={() => firebase.auth().signOut()}>Logout</button>
        </>
    )
}

export default Room
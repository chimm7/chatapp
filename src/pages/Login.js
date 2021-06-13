import React, { useState, useContext } from 'react'
// import SignUp from './SignUp'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../AuthService'
import firebase from '../config/firebase'  //初期化されたfirebaseを取ってくる

const Login = ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log(user)
                history.push('/')//引数に指定したパスにリダイレクト
            })
            .catch(err => {
                console.log(err)
            })
    }
    //auth・・・認証機能ってこと
    const user = useContext(AuthContext)
    //userのデータを取ってきたよ～

    if (user) {
        return <Redirect to='/' />
    }
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
        </>
    )
}

export default Login
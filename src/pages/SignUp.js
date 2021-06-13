import React, { useState } from 'react'
import firebase from '../config/firebase'  //初期化kされたfirebaseを取ってくる


const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => console.log(user)).catch(err => {
            console.log(err)
        })
        //firebaseの認証機能を使う。createUserWithEmailAndPasswordというメソッド。firebase上でユーザーを作りますよという意味のメソッド。
        //promiseオブジェクトになる。その時使えるようになるのが、.thenと.catch。成功したときは.then。失敗したときは.catch。
        //ユーザーの作成に成功すればconsoleにuserデータが出る。
        //ユーザーの作成に失敗すればconsoleには「err」が表示される。
    }
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        name='email'
                        type='email'
                        id='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        name='password'
                        type='password'
                        id='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp
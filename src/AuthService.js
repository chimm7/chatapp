import React, { useState, useEffect } from 'react'
import App from './App'
import firebase from './config/firebase'

const AuthContext = React.createContext()　//contextを作成

const AuthProvider = ({ children }) => { //ユーザーを管理するためのコンポーネント。AuthProviderはコンポーネントをラッピングするものみたいなイメージ
    const [user, setUser] = useState(null) //userを管理する。children・・propsである。childrenを引数として受け取っている。

    useEffect(() => {　//useEffct・・実行タイミングを設定・変更できる。通信の時などに使う。（総称：副作用）
        firebase.auth().onAuthStateChanged(user => {
            setUser(user)
        })
    }, [])　//レンダリング（ブラウザに描写されてること）後一回だけ実行する。

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}
// userには、ログイン済みのユーザーのオブジェクトが入ることになる。
//onAuthStateChanged ユーザーのログイン時、ログアウト時に必ず呼び出されるメソッド

export {
    AuthContext,
    AuthProvider
}

// children は、
// App.jsの
//     < AuthProvider >
//     <Router>
//         <Switch>
//             <LoggedInRoute exact path='/' component={Room} />
//             {/* <Route exact path='/' component={Room} /> */}
//             <Route exact path='/login' component={Login} />
//             <Route exact path='/signup' component={SignUp} />
//         </Switch>
//     </Router>
//     </AuthProvider >
//     の部分のこと
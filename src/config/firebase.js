import firebase from 'firebase/app'
import 'firebase/auth' //認証機能の追加の場合、もう一回書く必要がある。

const firebaseConfig = {
    // 各人の認証情報を記述
    apiKey: "AIzaSyAyuoEwdvzcSjJKpXaDvWcJ2_eSa5ESQNc",
    authDomain: "chatapp-9eb5e.firebaseapp.com",
    projectId: "chatapp-9eb5e",
    storageBucket: "chatapp-9eb5e.appspot.com",
    messagingSenderId: "426039994133",
    appId: "1:426039994133:web:0823991c575fc610eaeb1c"
}

firebase.initializeApp(firebaseConfig)

export default firebase
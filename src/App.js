import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Room from './pages/Room'

import { AuthProvider } from './AuthService'
import LoggedInRoute from './LoggedInRoute'


// import logo from './logo.svg';
// import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <LoggedInRoute exact path='/' component={Room} />
          {/* <Route exact path='/' component={Room} /> */}
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
        </Switch>
      </Router>
    </AuthProvider>

    // /login と打つとLoginのページに行く
    //exact path exact
    //Switch・・・切り替えをする

    // <>
    //   <Login />
    //   <SignUp />
    //   <Room />
    // </>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App

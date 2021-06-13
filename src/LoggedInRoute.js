import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from './AuthService'

const LoggedInRoute = ({ component: Component, ...rest }) => {
    const user = useContext(AuthContext) //Providerに指定したvalueプロパティに渡した値を参照することができます。

    return (
        <Route
            {...rest}
            render={props =>
                user ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={'/login'} />
                )
            }
        />
    )
}

export default LoggedInRoute
import React , {useContext} from 'react'
import { Login } from "./Login"
import { Register } from "./Register"
import { AuthNav } from '../components/parts/AuthNav'
import {Route, Redirect} from 'react-router-dom'
import {useAuth} from '../hooks/useAuth'
import {AuthUserCtx} from '../context/auth'

export const Auth = () => {
    const fetchMeApiData = useAuth()
    const  {authUser }  = useContext(AuthUserCtx)
    if(fetchMeApiData.loading)
    {
        return <div>Authenticating...</div>
    }
    if(authUser)
    {
        return <Redirect to="/"/>
    }
    return (
        <div>
            <AuthNav />
            <div>
                <Route path="/auth/login" component={Login} />
                <Route path="/auth/register" component={Register} />
            </div>
        </div>
    )
}

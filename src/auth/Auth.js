import React from 'react'
import { Login } from "./Login"
import { Route } from 'react-router-dom'
import { Register } from "./Register"
import { AuthNav } from '../components/parts/AuthNav'

export const Auth = () => {
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

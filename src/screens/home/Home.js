import React , {useContext, useEffect, useState }from 'react'
import { MainNav } from '../../components/parts/MainNav'
import {Redirect, Switch, Route} from 'react-router-dom'
import {AuthUserCtx} from '../../context/auth'  
import {useAuth} from '../../hooks/useAuth'
import {Game} from '../game/Game'
import {History} from '../history'


export const Home = () => {
    const {authUser} = useContext(AuthUserCtx)
    const {history, setHistory} = useState([])
    const fetchMeApiData = useAuth()
    if(fetchMeApiData.loading){
        return <div>Authenticating...</div>
    }
    if(fetchMeApiData.error){
        return <Redirect to="/auth/login" />
    }
    if(!authUser){
        return null
    }
    return (
        <div>
            <MainNav username={authUser.username} />
            <Switch>
                <Route exact path="/auth/game" component={Game}/>
                <Route exact path="/auth/history" component={History}/>
            </Switch>
        </div>
    )
}

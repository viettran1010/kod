import React, {useState} from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./screens/home/Home"
import { Game } from "./screens/game/Game"
import { Auth } from './auth/Auth'
import {AuthUserCtx} from './context/auth'
import{History} from './screens/history'

const App = () => {
  const [authUser, setAuthUser] = useState(null);

  const authUserCtxValue = {
    authUser: authUser,
    setAuthUser: setAuthUser,
  };
  return (
    <div>
       <AuthUserCtx.Provider value={authUserCtxValue}>
      <Switch>
        <Route path="/auth/game" component={Game} />
        <Route path="/auth/leaderboard" />
        <Route path="/auth" component={Auth} />
        <Route path="/auth/history" />
        <Route path="/" component={Home} />
      </Switch>
      </AuthUserCtx.Provider>
    </div>
  );
};

export default App;

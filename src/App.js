import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./screens/home/Home"
import { Game } from "./screens/game/Game"
import { Auth } from './auth/Auth'

const App = () => {
  // const [authUser, setAuthUser] = useState(null);

  // const authUserCtxValue = {
  //   authUser: authUser,
  //   setAuthUser: setAuthUser,
  // };
  return (
    <div>
      {/* <AuthUserCtx.Provider > */}
      <Switch>
        <Route path="/auth/game" component={Game} />
        <Route path="/auth/leaderboard" />
        <Route path="/auth" component={Auth} />
        <Route path="/" component={Home} />
      </Switch>
      {/* </AuthUserCtx.Provider> */}
    </div>
  );
};

export default App;

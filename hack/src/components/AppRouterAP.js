import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SignUpAP from "./SignUpAP"
import SignInAP from "./SignInAP"
import Home from "./HomeAP"

function AppRouter() {
    return(
<Router>
    <div>
     <nav>
         <ul>
             <li>
                 <Link to  = "/">Home</Link>
             </li>
             <li>
                <Link to = './signup'>Sign Up</Link>
             </li>

             <li>
                <Link to = './signin'>Sign In</Link>
             </li>
         </ul>
     </nav>
    </div>
<Switch>
<Route  path = '/signin' component = {SignInAP}/>
<Route  path = '/signup' component = {SignUpAP}/>

<Route exact path = '/' component = {Home}/>
</Switch>

</Router>

    )
}

export default AppRouter
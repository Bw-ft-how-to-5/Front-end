import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SignUpAP from "./SignUpAP"
import SignInAP from "./SignInAP"
import Home from "./HomeAP"
import HackLists from "./HacksListsAP"

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
            <li>
                <Link to = './hacks'>View Hacks</Link>
            </li>
         </ul>
     </nav>
    </div>
<Switch>

<Route  path = '/signin' component = {SignInAP}/>
<Route  path = '/signup' component = {SignUpAP}/>
<Route path = '/hacks' component = {HackLists}/>


<Route exact path = '/' component = {Home}/>

</Switch>

</Router>

    )
}

export default AppRouter
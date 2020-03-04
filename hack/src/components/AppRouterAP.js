import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SignUpAP from "./SignUpAP"
import SignInAP from "./SignInAP"
import Home from "./HomeAP"
import HackLists from "./HacksListsAP"
import styled from "styled-components"

const Div = styled.div `
background-color:#535974;
padding-top:0.2px;


`
const Li = styled.li `
list-style-type:none;
font-family: 'Amatic SC';
font-size:2rem;
color:white;
margin-right:2%;


`

const Ul = styled.ul `
display:flex;
justify-content:space-between;
align-items:center;
`

const A = styled.a `
color:white;

`

const H2 = styled.h2 `
color:white;
display:flex;

font-size:2rem;
`

function AppRouter() {
    return(
<Router>
    <Div>
     <nav>
         <div>
        
        </div>
         <Ul>
         <H2>Hack @ I.T</H2>
             <Li>
                 <Link to  = "/"><A>Home</A></Link>
             </Li>
             <Li>
                <Link to = './signup'><A>Sign Up</A></Link>
             </Li>

             <Li>
                <Link to = './signin'><A>Sign In</A></Link>
             </Li>
            <Li>
                <Link to = './hacks'><A>View Hacks</A></Link>
            </Li>
         </Ul>
     </nav>
    </Div>
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
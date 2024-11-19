import React, { useState } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./login";
import Nav from "./nav";
import ViewAll from "./viewAll";
import SendMoney from "./sendMoney";
import TransactionHistory from "./transactions";
import Home from "./home";
import NewCustomer from "./newcustomer";
import EditCustomer from "./editcustomer";
import Transfer from "./sendmoney2";

const AppComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    const handleLoginSuccess = () => {
        setIsLoggedIn(true); 
    };

    return (
        <div className="App">
            {isLoggedIn ? (
                <HomePage /> 
            ) : (
                <Login onLoginSuccess={handleLoginSuccess} /> 
            )}
        </div>
    );
};

function App(){
    return (<div>
    <Router>
    <Nav/>
        <Route path="/view" component={ViewAll} exact/>
        <Route path="/transfer" component={SendMoney} exact/>
        <Route path="/" component={Home} exact/>
        <Route path="/transaction" component={TransactionHistory} exact/>
        <Route path="/new" component={NewCustomer} exact/>
        <Route path="/update" component={EditCustomer}/>
        <Route path="/sendmoney" component={Transfer} />
    </Router>
    </div>);
}

export default App;
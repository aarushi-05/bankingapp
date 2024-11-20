import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./login";
import Nav from "./nav";
import ViewAll from "./viewAll";
import SendMoney from "./sendMoney";
import TransactionHistory from "./transactions";
import NewCustomer from "./newcustomer";
import EditCustomer from "./editcustomer";
import Transfer from "./sendmoney2";
import Home from "./home";


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

function App() {
    return (
        <div>
            <Router>
                <Nav />
                <Route path="/view" component={ViewAll} exact />
                <Route path="/transfer" component={SendMoney} exact />
                <Route path="/" component={HomePage} exact />  {/* Route to HomePage */}
                <Route path="/transaction" component={TransactionHistory} exact />
                <Route path="/new" component={NewCustomer} exact />
                <Route path="/update" component={EditCustomer} />
                <Route path="/sendmoney" component={Transfer} />
            </Router>
        </div>
    );
}


const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Banking System</h1>
        </div>
    );
};

export { HomePage }; // Export the HomePage component

export default App;